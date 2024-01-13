const config = {
    baseUrl: 'https://mesto.nomoreparties.co/v1/wff-cohort-3',
    headers: {
        authorization: '7a63265d-83b0-4a7b-ae13-c893a291e3eb',
        'Content-Type': 'application/json'
    }
}

// информация о пользователе с сервера  
export function getProfileData() {
    return fetch (`${config.baseUrl}/users/me`, {
        method: 'GET',
        headers: config.headers
    })

    .then((res) => {
        if (res.ok) {
            return res.json()
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }) 
}


//загрузка карточек с сервера
export function getinitialCard() {
    return fetch (`${config.baseUrl}/cards`, {
        method: 'GET',
        headers: config.headers
    })

    .then((res) => {
        if (res.ok) {
            return res.json()
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    })
}


// функция сохранения на сервере редактирования профиля 
export function changeProfData(newName, newAbout) {
    return fetch(`${config.baseUrl}/users/me`, {
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
}


//функция добавления новой карточки(использовал функцию в modal.js в addCard)
export function addNewCard(cardData) {
    return fetch (`${config.baseUrl}/cards`, {
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
}


//удаление карточки
export function deleteYouCard(id) {
    return fetch (`${config.baseUrl}/cards/${id}`, {
        method: 'DELETE',
        headers: config.headers,
    })

    .then((res) => {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    })
}

//функции лайка
export function likeSomeCard(id) {
    return fetch (`${config.baseUrl}/cards/likes/${id}`, {
        method: 'PUT',
        headers: config.headers,
    })

    .then((res) => {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    })
}

export function deleteLikeSomeCard(id) {
    return fetch (`${config.baseUrl}/cards/likes/${id}`, {
        method: 'DELETE',
        headers: config.headers,
    })

    .then((res) => {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    })
}

export function changeAvatar(newAvatarLink) { 
    return fetch (`${config.baseUrl}/users/me/avatar`, {
        method: 'PATCH',
        headers: config.headers,
        body: JSON.stringify({
            avatar: newAvatarLink
        })
    })

    .then((res) => {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    })
}