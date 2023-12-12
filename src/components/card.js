const cardTemplate = document.querySelector('#card-template').content;

function createCard(cardData, deleteCardCallback, likeButtonCallback, openCardPopup) {
  const cardPlacesItem = cardTemplate.querySelector('.places__item').cloneNode(true);
  const cardImage = cardPlacesItem.querySelector('.card__image');
  const cardTitle = cardPlacesItem.querySelector('.card__title');
  
  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;
  cardTitle.textContent = cardData.name;
  
  const cardDeleteButton = cardPlacesItem.querySelector('.card__delete-button');
  cardDeleteButton.addEventListener('click', () => {
      deleteCardCallback(cardPlacesItem)
    });

  const likeButton = cardPlacesItem.querySelector('.card__like-button');
  likeButton.addEventListener('click', () => {
    likeButtonCallback(likeButton)
  })
  
  cardImage.addEventListener('click', () => {
    openCardPopup(cardData)
  })
  return cardPlacesItem;
}

function likeCard(button) {
  button.classList.toggle('card__like-button_is-active')
} 

function deleteCard(item) {
  item.remove();
}

export {createCard, likeCard, deleteCard}