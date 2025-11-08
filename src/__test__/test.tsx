import {extractTemplateScript, Wrapper} from "@/app/Wrapper";
import { render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';


describe('extractTemplateScript', () => {
    it('возвращает пустую строку, если template вообще ничего не вернул', () => {
        expect(extractTemplateScript(() => null)).toBe('');
        expect(extractTemplateScript(() => undefined as any)).toBe('');
    });

    it('возвращает многострочный код без внешних пробелов', () => {
        const multiline = `
      console.log('hello');
      root.style.color = 'red';
    `;
        expect(extractTemplateScript(() => <template>{multiline}</template>)).toBe(multiline.trim());
    });
});

/* мок console.error, чтобы проверять ошибки */
const mockConsoleError = jest.spyOn(console, 'error').mockImplementation();

const getShadow = (host: HTMLDivElement) => host.shadowRoot!;
const getShadowHTML = (host: HTMLDivElement) => getShadow(host).innerHTML;

const emptyTpl = () => <template> </template>;
const okTpl = () => <template>{`root.innerHTML += '<span id="ok">works</span>';`}</template>;
const tpl1 = () => <template>{`root.innerHTML += '<div id="first">one</div>';`}</template>;
const errTpl = () => <template>{`throw new Error('boom');`}</template>;

describe('Wrapper', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('создаёт shadow-root и вставляет htmlStrings', async () => {
        const html = '<p>static</p>';
        const { container } = render(<Wrapper htmlStrings={html} templates={[]} />);
        const host = container.firstElementChild as HTMLDivElement;

        await waitFor(() => {
            expect(host.shadowRoot).toBeTruthy();
            expect(getShadowHTML(host)).toContain('<p>static</p>');
        });
    });

    it('добавляет ссылку на /light.css', async () => {
        const { container } = render(<Wrapper links={["/light.css"]} htmlStrings="" templates={[]} />);
        const host = container.firstElementChild as HTMLDivElement;

        await waitFor(() => {
            const link = getShadow(host).querySelector(
                'link[rel="stylesheet"]'
            ) as HTMLLinkElement;
            expect(link).toBeInTheDocument();
            expect(link.href).toMatch(/\/light\.css$/);
        });
    });

    it('игнорирует пустые шаблоны и не падает', async () => {
        render(<Wrapper htmlStrings="" templates={[emptyTpl]} />);
        await waitFor(() => {
            expect(mockConsoleError).not.toHaveBeenCalled();
        });
    });

    it('при ошибке в шаблоне выводит console.error и продолжает работать', async () => {
        render(<Wrapper htmlStrings="" templates={[errTpl]} />);
        await waitFor(() => {
            expect(mockConsoleError).toHaveBeenCalledWith(
                expect.stringContaining('Ошибка в шаблоне #0:'),
                expect.any(Error)
            );
        });
    });


    it('очищает shadow-root при размонтировании', async () => {
        const { unmount, container } = render(
            <Wrapper htmlStrings="<b>test</b>" templates={[]} />
        );
        const host = container.firstElementChild as HTMLDivElement;
        await waitFor(() => expect(getShadowHTML(host)).toContain('<b>test</b>'));

        unmount();
        expect(host.shadowRoot?.innerHTML).toBe('');
    });

    it("добавление нескольких стилей", () => {
        const { container } = render(<Wrapper links={["/light.css", "/light.css"]} htmlStrings="" templates={[]} />);
        const host = container.firstElementChild as HTMLDivElement;
        const length = getShadow(host).querySelectorAll('link[rel="stylesheet"]').length

        expect(length).toBe(2);
    })

    it('выполняет код из шаблонов, передавая shadow как root', async () => {
        const { container } = render(
            <Wrapper htmlStrings="" templates={[okTpl]} />
        );
        const host = container.firstElementChild as HTMLDivElement;

        await waitFor(() => {
            expect(getShadow(host).querySelector('#ok')?.textContent).toBe('works');
        });
    });

    it("выполняет несколько js шаблонов подряд", async () => {
        const { container } = render(
            <Wrapper htmlStrings="" templates={[okTpl, tpl1]} />
        );
        const host = container.firstElementChild as HTMLDivElement;

        await waitFor(() => {
            expect(getShadow(host).querySelector('#ok')?.textContent).toBe('works');
            expect(getShadow(host).querySelector('#first')?.textContent).toBe('one');
        });
    })
});