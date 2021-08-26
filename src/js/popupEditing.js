import { FormValidator } from "./formValidator";
import { Popup } from "./popup";

export class PopupEditing extends Popup {
    constructor(container, template, userInfo) {
        super(container, template);
        this.userInfo = userInfo;
    }

    open(event) {
        super.open();
        
        const userName = document.querySelector('.user-info__name');
        const userAbout = document.querySelector('.user-info__job');

        const editForm = this.container.querySelector('[name="edit"]');
        
        editForm.elements.personName.value = userName.textContent;
        editForm.elements.about.value = userAbout.textContent;
        
        const formValidator = new FormValidator(editForm);
        formValidator.setEventListeners();

        const popupButton = this.container.querySelector('.popup__button');
        popupButton.addEventListener('click', event => {
            event.preventDefault();
            popupButton.textContent = 'Загрузка...';

            this.userInfo.updateUserInfo(editForm.elements.personName.value,
                editForm.elements.about.value, () => {
                    super.close();
                }
            );
        });
    }
}
