import {createCard, likeCard, deleteCard} from './card.js'
const placesList = document.querySelector('.places__list');

const config = {
    baseUrl: 'https://mesto.nomoreparties.co/v1/wff-cohort-3',
    headers: {
        authorization: '7a63265d-83b0-4a7b-ae13-c893a291e3eb',
        'Content-Type': 'application/json'
    }
}

// информация о пользователе с сервера  
export function getProfileData() {
    fetch (`${config.baseUrl}/users/me`, {
        method: 'GET',
        headers: config.headers
    })

    .then((res) => {
        if (res.ok) {
            return res.json()
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    })

    .then((data) => {
        const profileTitle = document.querySelector('.profile__title')
        const profileDescription = document.querySelector('.profile__description')
        const profileImage = document.querySelector('.profile__image')
        
        profileTitle.textContent = data.name;
        profileDescription.textContent = data.about;
        profileImage.style.backgroundImage = `url(${data.avatar})`
    })

    .catch((err) => {
        console.log(err);
    }); 
}


//загрузка карточек с сервера
export function getinitialCard() {
    fetch (`${config.baseUrl}/cards`, {
        method: 'GET',
        headers: config.headers
    })

    .then((res) => {
        if (res.ok) {
            return res.json()
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    })

    .then((data) => {
        console.log(data)
        data.forEach((item) => {
            const newCard = createCard(item, deleteCard, likeCard, cardPopup);
            placesList.append(newCard);
        })
    })

    .catch((err) => {
        console.log(err);
    }); 
}

import {cardPopup} from './modal.js'

// функция сохранения на сервере редактирования профиля 
export function changeProfData() {
    const nameInput = document.querySelector('.popup__input_type_name');
    const jobInput = document.querySelector('.popup__input_type_description');

    const newName = nameInput.value;
    const newAbout = jobInput.value;

    fetch(`${config.baseUrl}/users/me`, {
        method: 'PATCH',
        headers: config.headers,
        body: JSON.stringify({
            name: newName,
            about: newAbout,
        }),
    })

    .then((res) => {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    })

    .finally(() => {
    renderLoading(false)
    })

    .catch((err) => {
        console.log(err);
    });
}


//функция добавления новой карточки(использовал функцию в modal.js в addCard)
export function addNewCard(cardData) {
    fetch (`${config.baseUrl}/cards`, {
        method: 'POST',
        headers: config.headers,
        body: JSON.stringify({
            name: cardData.name,
            link: cardData.link, 
        })
    })

    .then((res) => {
        if (res.ok) {
            return res.json()
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    })

    .finally(() => {
        renderLoading(false)
        })

    .catch((err) => {
        console.log(err);
    });
}


//удаление карточки
export function deleteYouCard(id) {
    fetch (`${config.baseUrl}/cards/${id}`, {
        method: 'DELETE',
        headers: config.headers,
    })

    .then((res) => {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    })

    .catch((err) => {
        console.log(err);
    });
}

//функции лайка
export function likeSomeCard(id, updateLikeCountCallback) {
    fetch (`${config.baseUrl}/cards/likes/${id}`, {
        method: 'PUT',
        headers: config.headers,
    })

    .then((res) => {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    })

    .then((data) => {
        updateLikeCountCallback(data.likes.length);
    })

    .catch((err) => {
        console.log(err);
    });

}

export function deleteLikeSomeCard(id, updateLikeCountCallback) {
    fetch (`${config.baseUrl}/cards/likes/${id}`, {
        method: 'DELETE',
        headers: config.headers,
    })

    .then((res) => {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    })

    .then((data) => {
        updateLikeCountCallback(data.likes.length);
    })

    .catch((err) => {
        console.log(err);
    });

}

export function changeAvatar(newAvatar) { 
    fetch (`${config.baseUrl}/users/me/avatar`, {
        method: 'PATCH',
        headers: config.headers,
        body: JSON.stringify({
            avatar: newAvatar
        })
    })

    .then((res) => {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    })

    .finally(() => {
        renderLoading(false)
        })

    .catch((err) => {
        console.log(err);
    });
}
const buttonSave = document.querySelectorAll(".popup__button");
export const renderLoading = (isLoading) => {
    if (isLoading) {
      buttonSave.forEach((button) => {
        button.textContent = "Сохранение...";
      });
    } else {
      buttonSave.forEach((button) => {
        button.textContent = "Сохранить";
      });
    }
  };