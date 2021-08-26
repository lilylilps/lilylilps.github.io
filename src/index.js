import "./index.css";

import { Api } from "./js/api";
import { CardsList } from "./js/cardsList";
import { PopupAvatar } from "./js/popupAvatar";
import { PopupEditing } from "./js/popupEditing";
import { PopupImage } from "./js/popupImage";
import { PopupInfo } from "./js/popupInfo";
import { UserInfo } from "./js/userInfo";

const api = new Api ({
    baseUrl: 'https://nomoreparties.co/cohort9',
    headers: {
        authorization: 'e61fe8d2-a8b7-469e-9421-cb2c95a5cb26',
        'Content-Type': 'application/json'
    }
});

const cardContainer = document.querySelector('.places-list');
const cardsList = new CardsList(cardContainer, api);

const popup = document.querySelector('.popup');

const addPopup = document.querySelector('#addPopup');
const editPopup = document.querySelector('#editPopup');
const imageTemplate = document.querySelector('#image');
const avatarPopup = document.querySelector('#avatarPopup');

const userInfo = new UserInfo(api);
userInfo.setUserInfo().then(user => {
    cardsList.render(user._id);
});

const popupInfo = new PopupInfo(popup, addPopup, cardsList);
const popupEditing = new PopupEditing(popup, editPopup, userInfo);
const popupImage = new PopupImage(popup, imageTemplate);
const popupAvatar = new PopupAvatar(popup, avatarPopup, userInfo);

const infoButton = document.querySelector('.user-info__button');
const editButton = document.querySelector('.user-info__edit-button');
const userPhoto = document.querySelector('.user-info__photo');

infoButton.addEventListener('click', popupInfo.open);
editButton.addEventListener('click', popupEditing.open);
cardContainer.addEventListener('click', popupImage.open);
userPhoto.addEventListener('click', popupAvatar.open);
