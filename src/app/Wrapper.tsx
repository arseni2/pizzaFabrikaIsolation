"use client";
import {useEffect, useRef} from "react";
import "@/web-components/AccordionElement"

type PropsType = {
    htmlString: string;
    templateRef: string;
};

//Можно не использовать requestAnimationFrame а передавать ref
export const Wrapper = ({ htmlString, templateRef }: PropsType) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let animationFrameId: number;

        const attachShadowAndInit = () => {
            const temp = document.querySelector(`#${templateRef}`) as HTMLTemplateElement | null;

            if (!temp) {
                // Элемент ещё не в DOM — повторяем в следующем фрейме
                animationFrameId = requestAnimationFrame(attachShadowAndInit);
                return;
            }

            if (ref.current) {
                const el = ref.current;
                const shadowRoot = el.shadowRoot || el.attachShadow({ mode: 'open' });
                const templateContent = temp.textContent?.trim();
                console.log('Template JS code:', templateContent);

                shadowRoot.innerHTML = htmlString;

                const link = document.createElement('link');
                link.rel = 'stylesheet';
                link.href = '/light.css';
                shadowRoot.appendChild(link);

                try {
                    // Выполняем JS-код из шаблона, передавая shadowRoot как `root`
                    const fn = new Function('root', templateContent);
                    fn(shadowRoot);
                } catch (e) {
                    console.error('Ошибка выполнения скрипта из шаблона:', e);
                }
            }
        };

        animationFrameId = requestAnimationFrame(attachShadowAndInit);

        return () => {
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
        };
    }, [htmlString, templateRef]);

    return <div ref={ref} />;
};