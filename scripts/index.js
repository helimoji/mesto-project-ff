const cardTemplate = document.querySelector('#card-template').content;

function createCard(cardData, deleteCardCallback) {
    const cardPlacesItem = cardTemplate.querySelector('.places__item').cloneNode(true);
    const cardImage = cardPlacesItem.querySelector('.card__image');
    const cardTitle = cardPlacesItem.querySelector('.card__title');
    
    cardImage.src = cardData.link;
    cardImage.alt = cardData.name;
    cardTitle.textContent = cardData.name;
    
    const cardDeleteButton = cardPlacesItem.querySelector('.card__delete-button');
    cardDeleteButton.addEventListener("click", () => {
        deleteCardCallback(cardPlacesItem)
    });
    return cardPlacesItem;
}

function deleteCard(item) {
    item.remove();
}

const placesList = document.querySelector(".places__list");

initialCards.forEach((item) => {
    const newCard = createCard(item, deleteCard);
    placesList.append(newCard);
})
