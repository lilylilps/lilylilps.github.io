export class FormValidator {
    constructor(instance) {
        this.instance = instance;
        
        this.checkInputValidity = this.checkInputValidity.bind(this);
        this.setSubmitButtonState = this.setSubmitButtonState.bind(this);        
        this.setEventListeners = this.setEventListeners.bind(this);        
    }

    setEventListeners() {
        const inputs = this.instance.getElementsByTagName("input");
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].addEventListener('input', this.checkInputValidity);
        }
    }

    checkInputValidity(event) {
        const isTextTooLong = () => event.target.type === 'text' && event.target.value.length > 30;
        let isValidField = true;
    
        if (event.target.value.length === 0) {
            event.target.nextElementSibling.textContent = 'Это обязательное поле';
            event.target.nextElementSibling.style.marginBottom = '4px';
            isValidField = false;
        } else if (isTextTooLong() || event.target.validity.tooShort) {
            event.target.nextElementSibling.textContent = 'Должно быть от 2 до 30 символов';
            event.target.nextElementSibling.style.marginBottom = '4px';
            isValidField = false;
        } else if (event.target.type === 'url' && event.target.validity.typeMismatch) {
            event.target.nextElementSibling.textContent = 'Здесь должна быть ссылка';
            event.target.nextElementSibling.style.marginBottom = '4px';
            isValidField = false;
        } else {
            event.target.nextElementSibling.textContent = '';
            event.target.nextElementSibling.style.marginBottom = '22px';
        }

        this.setSubmitButtonState(isValidField);
    }

    setSubmitButtonState(isValidField) {
        const popupButton = this.instance.querySelector('.popup__button');

        if (!isValidField || !this.instance.checkValidity()) {
            popupButton.setAttribute('disabled', true);
            popupButton.classList.remove('popup__button_active');
        } else {
            popupButton.removeAttribute('disabled');
            popupButton.classList.add('popup__button_active');
        }
    }
}
