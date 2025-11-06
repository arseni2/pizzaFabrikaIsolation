if (typeof window !== 'undefined' && !customElements.get('my-accordion')) {
    class AccordionElement extends HTMLElement {
        private header!: HTMLElement;
        private content!: HTMLElement;
        private isExpanded = false;

        constructor() {
            super();
            this.attachShadow({ mode: 'open' });
            this.render();
            this.bindEvents();
        }

        // 🎨 Возвращает HTML-разметку как строку
        private getTemplate(title: string): string {
            return `
        <style>
          :host {
            display: block;
            font-family: Arial, sans-serif;
            border: 1px solid #ccc;
            border-radius: 4px;
            overflow: hidden;
          }
          .header {
            background-color: #f5f5f5;
            padding: 12px 16px;
            cursor: pointer;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-weight: bold;
            user-select: none;
          }
          .header:hover {
            background-color: #e9e9e9;
          }
          .icon {
            transition: transform 0.2s ease;
          }
          .icon--expanded {
            transform: rotate(90deg);
          }
          .content {
            padding: 0 16px;
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease, padding 0.3s ease;
          }
          .content--expanded {
            padding: 16px;
            max-height: 500px;
          }
        </style>
        <div class="header">
          <span>${title}</span>
          <span class="icon">▶</span>
        </div>
        <div class="content">
          <slot></slot>
        </div>
      `;
        }

        // private escapeHtml(str: string): string {
        //     return str
        //         .replace(/&/g, '&amp;')
        //         .replace(/</g, '<')
        //         .replace(/>/g, '>')
        //         .replace(/"/g, '&quot;')
        //         .replace(/'/g, '&#039;');
        // }

        private render() {
            const title = this.getAttribute('title') || 'Accordion';
            this.shadowRoot!.innerHTML = this.getTemplate(title);
            this.header = this.shadowRoot!.querySelector('.header')!;
            this.content = this.shadowRoot!.querySelector('.content')!;
        }

        private bindEvents() {
            this.header.addEventListener('click', () => this.toggle());
        }

        private toggle() {
            this.isExpanded = !this.isExpanded;
            this.updateUI();
        }

        private updateUI() {
            const icon = this.header.querySelector('.icon')!;
            if (this.isExpanded) {
                icon.classList.add('icon--expanded');
                this.content.classList.add('content--expanded');
            } else {
                icon.classList.remove('icon--expanded');
                this.content.classList.remove('content--expanded');
            }
        }
    }

    customElements.define('my-accordion', AccordionElement);
    console.log("INIT: webcp");
}