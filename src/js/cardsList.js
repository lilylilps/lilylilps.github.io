import { Card } from "./card";

export class CardsList {
    constructor(container, api) {
        this.container = container;
        this.api = api;
    }

    createNewCard(name, link, popupCallback) {
        this.api.addNewCard(name, link).then(card => {
            this._addCard(card.name, card.link, card.likes, card._id,
                card.owner._id, card.owner._id);
            popupCallback();
        });
    }

    render(currentUserId) {
        this.api.getInitialCards().then(cards => {
            for (let card of cards) {
                this._addCard(card.name, card.link, card.likes, card._id,
                    currentUserId, card.owner._id);
            }
        });
    }

    _addCard(name, link, likes, cardId, currentUserId, cardAuthorId) {
        const newCard = new Card(name, link, likes, cardId, cardAuthorId, this.api);
        this.container.appendChild(newCard.createCard(currentUserId));
    }
}
