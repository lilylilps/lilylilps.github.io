import { FormValidator } from "./formValidator";
import { Popup } from "./popup";

export class PopupInfo extends Popup {
    constructor(container, template, cardsList) {
        super(container, template);
        this.cardsList = cardsList;
    }

    open(event) {
        super.open();
        
        const addForm = this.container.querySelector('[name="new"]');

        const formValidator = new FormValidator(addForm);
        formValidator.setEventListeners();

        const popupButton = this.container.querySelector('.popup__button');
        popupButton.addEventListener('click', event => {
            event.preventDefault();
            popupButton.classList.remove('popup__button_add');
            popupButton.textContent = 'Загрузка...';
            
            const addForm = this.container.querySelector('[name="new"]');
            const name = addForm.elements.name.value;
            const link = addForm.elements.link.value;

            this.cardsList.createNewCard(name, link, () => {
                addForm.reset();
                super.close();
            });
        });
    }
}
