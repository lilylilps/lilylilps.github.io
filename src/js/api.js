export class Api {
    constructor(options) {
        this.options = options;
        this.url = options.baseUrl;
        this.headers = options.headers;
    }

    getUserInfo() {
        return fetch(`${this.url}/users/me`, {
            headers: this.headers
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Ошибка: ${res.status}`);
            })
            .then((result) => {
                return Promise.resolve(result);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    getInitialCards() {
        return fetch(`${this.url}/cards`, {
            headers: this.headers
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }

                return Promise.reject(`Ошибка: ${res.status}`);
            })
            .then((result) => {
                return Promise.resolve(result);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    editProfile(name, about) {
        return fetch(`${this.url}/users/me`, {
            method: 'PATCH',
            headers: this.headers,
            body: JSON.stringify({
                name: name,
                about: about
            })
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }

                return Promise.reject(`Ошибка: ${res.status}`);
            })
            .then((result) => {
                return Promise.resolve(result);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    addNewCard(name, link) {
        return fetch(`${this.url}/cards`, {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify({
                name: name,
                link: link
            })
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }

                return Promise.reject(`Ошибка: ${res.status}`);
            })
            .then((result) => {
                return Promise.resolve(result);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    deleteCard(cardId) {
        return fetch(`${this.url}/cards/${cardId}`, {
            method: 'DELETE',
            headers: this.headers
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }

                return Promise.reject(`Ошибка: ${res.status}`);
            })
            .then((result) => {
                return Promise.resolve(result);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    like(cardId) {
        return fetch(`${this.url}/cards/like/${cardId}`, {
            method: 'PUT',
            headers: this.headers
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }

                return Promise.reject(`Ошибка: ${res.status}`);
            })
            .then((result) => {
                return Promise.resolve(result);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    dislike(cardId) {
        return fetch(`${this.url}/cards/like/${cardId}`, {
            method: 'DELETE',
            headers: this.headers
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }

                return Promise.reject(`Ошибка: ${res.status}`);
            })
            .then((result) => {
                return Promise.resolve(result);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    changeAvatar(newAvatar) {
        return fetch(`${this.url}/users/me/avatar`, {
            method: 'PATCH',
            headers: this.headers,
            body: JSON.stringify({
                avatar: newAvatar
            })
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }

                return Promise.reject(`Ошибка: ${res.status}`);
            })
            .then((result) => {
                return Promise.resolve(result);
            })
            .catch((err) => {
                console.log(err);
            });
    }
}
