export class Popup {
    constructor(container, template) {
        this.template = template;
        this.container = container;
        this.fragment = this.template.content;
        
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
    }

    open(event) {
        const popupTemplate = this.container.querySelector('#popupTemplate');
        const closeButton = this.container.querySelector('.popup__close');

        popupTemplate.appendChild(this.fragment.cloneNode(true));

        closeButton.addEventListener('click', this.close);

        this.container.classList.add('popup_is-opened');
        this.container.focus();
    }

    close(event) {
        const popupTemplate = this.container.querySelector('#popupTemplate');

        while (popupTemplate.firstChild) {
            popupTemplate.removeChild(popupTemplate.lastChild);
        }
        
        this.container.classList.remove('popup_is-opened');
    }
}
