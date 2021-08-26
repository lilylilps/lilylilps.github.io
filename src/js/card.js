export class Card{
    constructor(name, link, likes, cardId, cardAuthorId, api) {
        this.name = name;
        this.link = link;
        this.likes = likes;
        this.cardId = cardId;
        this.cardAuthorId = cardAuthorId;
        this.api = api;

        this.like = this.like.bind(this);
        this.remove = this.remove.bind(this);
    }

    createCard(currentUserId) {
        const card = document.querySelector('#card');
        const cardFragment = card.content.cloneNode(true);
        const cardName = cardFragment.querySelector('.place-card__name');
        const cardImage = cardFragment.querySelector('.place-card__image');
        const likeNumber = cardFragment.querySelector('.place-card__like-number');

        likeNumber.textContent = this.likes.length;
        cardName.textContent = this.name;
        cardImage.style.backgroundImage = `url(${this.link})`;

        this.cardElement = cardFragment.querySelector('.place-card');

        this.cardElement
            .querySelector('.place-card__like-icon')
            .addEventListener('click', this.like);

        this.cardElement
            .querySelector('.place-card__delete-icon')
            .addEventListener('click', this.remove);

        if (currentUserId !== this.cardAuthorId) {
            this.cardElement.querySelector('.place-card__delete-icon')
                .classList.add('place-card__delete-icon_hidden');
        }

        for (let userLike of this.likes) {
            if (userLike._id === currentUserId) {
                this.cardElement.querySelector('.place-card__like-icon')
                    .classList.add('place-card__like-icon_liked');
            }
        }

        return cardFragment;
    }

    like(event) {
        if (event.target.classList.contains('place-card__like-icon_liked')) {
            this.api.dislike(this.cardId).then(card => {
                event.target.classList.remove('place-card__like-icon_liked');
                this.cardElement.querySelector('.place-card__like-number').textContent = card.likes.length;
                this.likes = card.likes;
            })
        } else {
            this.api.like(this.cardId).then(card => {
                event.target.classList.add('place-card__like-icon_liked');
                this.cardElement.querySelector('.place-card__like-number').textContent = card.likes.length;
                this.likes = card.likes;
            })
        }
    }

    remove(event) {
        if (window.confirm("Вы действительно хотите удалить эту карточку?")) {
            this.api.deleteCard(this.cardId).then(() => {
                const removeCard = event.toElement.parentElement.parentElement;
                this.cardElement.parentElement.removeChild(removeCard);
            })
        }
    }
}
