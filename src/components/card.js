import {deleteYouCard, likeSomeCard, deleteLikeSomeCard} from '../components/api.js'

const cardTemplate = document.querySelector('#card-template').content;

function createCard(cardData, deleteCardCallback, likeButtonCallback, openCardPopup) {
  const cardPlacesItem = cardTemplate.querySelector('.places__item').cloneNode(true);
  const cardImage = cardPlacesItem.querySelector('.card__image');
  const cardTitle = cardPlacesItem.querySelector('.card__title');
  const cardLikes = cardPlacesItem.querySelector('.card__like-number');
  const numberLikes = cardData.likes && cardData.likes.length !== undefined ? cardData.likes.length : 0;

  const cardId = cardData._id;
  
  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;
  cardTitle.textContent = cardData.name;
  cardLikes.textContent = numberLikes

  const userId = cardData.owner && cardData.owner._id ? `${cardData.owner._id}` : 'defaultUserId';
  
  const cardDeleteButton = cardPlacesItem.querySelector('.card__delete-button');
  
  if (userId === 'dd7b1e3d2c55b314602b92b3') {
  cardDeleteButton.addEventListener('click', () => {
      deleteCardCallback(cardPlacesItem)
      deleteYouCard(cardId)
    });}
    else {
      cardDeleteButton.style.display = 'none';
    }

  const likeButton = cardPlacesItem.querySelector('.card__like-button');
  likeButton.addEventListener('click', () => {
    if (likeButton.classList.contains('card__like-button_is-active')) {
      deleteLikeSomeCard(cardId, (newLikeCount) => {
        cardLikes.textContent = newLikeCount
      })
    } else {
    likeSomeCard(cardId, (newLikeCount) => {
      cardLikes.textContent = newLikeCount;
    })
    }
    likeButtonCallback(likeButton)
  })

  const likesIds = cardData.likes && Array.isArray(cardData.likes)
  ? cardData.likes.map(like => like._id)
  : [];

  if (likesIds.includes('dd7b1e3d2c55b314602b92b3')) {
    likeButton.classList.add('card__like-button_is-active')
  }
  else {
    likeButton.classList.remove('card__like-button_is-active')
  }
  
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