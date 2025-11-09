import {BaseComponent} from "@/web-components/BaseComponent";

if (typeof window !== 'undefined' && !customElements.get('my-img')) {
    class MyImg extends BaseComponent {
        ownAttrs = ['src', 'alt', 'radius'];

        static get observedAttributes() {
            return ['src', 'alt', 'radius'];
        }

        constructor() {
            super();
            this.attachShadow({ mode: 'open' });
        }

        connectedCallback() {
            this.render();
        }

        attributeChangedCallback() {
            this.render();
        }

        private render() {
            const src    = this.getAttribute('src')  || '';
            const alt    = this.getAttribute('alt')  || '';
            const radius = this.hasAttribute('radius') &&
                this.getAttribute('radius') !== 'false';

            this.shadowRoot!.innerHTML = `
                <style>
                  :host {
                    display: inline-block;
                    line-height: 0
                  }
                  
                  img {
                    max-width: 100%;
                    height: auto;
                    ${radius ? 'border-radius:15px' : ''}
                  }
                </style>
                
                <img src="${src}" alt="${alt}" loading="lazy" decoding="async" ${this.passThruAttrs}>
            `;
        }
    }

    customElements.define('my-img', MyImg);
}