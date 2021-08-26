import { Popup } from "./popup";

export class PopupImage extends Popup {
    constructor(container, template) {
        super(container, template);
    }

    open(event) {
        if (!event.target.classList.contains('place-card__image')) return;

        const popupContent = this.container.querySelector('.popup__content');
        
        const image = this.fragment.querySelector('.popup__image');
        const imageSrc = event.target.style.backgroundImage.replace('url("', '').replace('")', '');
        image.setAttribute('src', imageSrc);
        
        super.open();
        
        popupContent.classList.remove('popup__content');  
    }

    close(event) {
        super.close();

        if (!event.target.closest('.popup__content')) {
            event.target.parentElement.classList.add('popup__content');
        }
    }
}
