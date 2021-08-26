import { FormValidator } from "./formValidator";
import { Popup } from "./popup";

export class PopupAvatar extends Popup {
    constructor(container, template, userInfo) {
        super(container, template);
        this.userInfo = userInfo;
    }

    open(event) {        
        super.open();

        const avatarForm = this.container.querySelector('[name="avatar"]');

        const formValidator = new FormValidator(avatarForm);
        formValidator.setEventListeners();

        const popupButton = this.container.querySelector('.popup__button');
        popupButton.addEventListener('click', event => {
            
            event.preventDefault();
            
            popupButton.textContent = 'Загрузка...';
            const avatarForm = this.container.querySelector('[name="avatar"]'); 
            const avatarLink = avatarForm.elements.imageLink.value;
            
            this.userInfo.updateAvatar(avatarLink, () => {
                avatarForm.reset();
                super.close();
            });
        });
    }
}