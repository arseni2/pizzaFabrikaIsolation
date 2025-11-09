export abstract class BaseComponent extends HTMLElement {
    abstract ownAttrs: string[];

    get passThruAttrs(): string {
        const skip = this.ownAttrs;
        const buf: string[] = [];
        for (let i = 0; i < this.attributes.length; i++) {
            const { name, value } = this.attributes[i];
            if (!skip.includes(name)) {
                buf.push(`${name}="${value}"`);
            }
        }
        return buf.join(' ');
    }
}