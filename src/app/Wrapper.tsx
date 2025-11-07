"use client";
import {ReactNode, useEffect, useRef} from "react";
import "@/web-components/AccordionElement"

export function extractTemplateScript(template: () => ReactNode): string {
    const child = template()?.props.children;
    return typeof child === "string" ? child.trim() : "";
}
type TemplateComponent = () => ReactNode;

type Props = {
    htmlStrings: string;
    templates: TemplateComponent[];
};

export const Wrapper = ({ htmlStrings, templates }: Props) => {
    const hostRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!hostRef.current) return;

        const shadow = hostRef.current.shadowRoot || hostRef.current.attachShadow({ mode: "open" });
        shadow.innerHTML = htmlStrings;

        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "/light.css";
        shadow.appendChild(link);

        /* выполняем скрипты */
        templates.forEach((Tpl, idx) => {
            const code = extractTemplateScript(Tpl);
            if (!code) return;
            try {
                new Function("root", code)(shadow);
            } catch (e) {
                console.error(`Ошибка в шаблоне #${idx}:`, e);
            }
        });

        return () => shadow.replaceChildren();
    }, [htmlStrings, templates]);

    return <div ref={hostRef} />;
};