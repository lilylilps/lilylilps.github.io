export class UserInfo {
    constructor(api) {
        this.api = api;
        
        this.id = '';
        this.userName = document.querySelector('.user-info__name');
        this.userAbout = document.querySelector('.user-info__job');
        this.userPhoto = document.querySelector('.user-info__photo');

        this.setUserInfo = this.setUserInfo.bind(this);
        this.updateUserInfo = this.updateUserInfo.bind(this);
    }

    setUserInfo() {
        return this.api.getUserInfo().then(user => {
            this.id = user.id;
            this.userName.textContent = user.name;
            this.userAbout.textContent = user.about;
            this.userPhoto.src = user.avatar;

            return user;
        });    
    }

    updateUserInfo(name, about, popupCallback) {
        this.api.editProfile(name, about).then(user => {
            this.userName.textContent = user.name;
            this.userAbout.textContent = user.about;
            popupCallback();
        });
    }

    updateAvatar(newAvatar, popupCallback) {
        this.api.changeAvatar(newAvatar).then(user => {
            user.avatar = newAvatar;
            this.userPhoto.src = newAvatar;
            popupCallback();
        });
    }
}
