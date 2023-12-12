import {createCard, likeCard, deleteCard} from '../components/cards.js';

function cardPopup(cardData) {
    const popupSomeCard = document.querySelector('.popup_type_image');
    const popupImage = document.querySelector('.popup__image');
    const popupCaption = document.querySelector('.popup__caption');
  
    popupImage.src = cardData.link;
    popupImage.alt = cardData.name;
    popupCaption.textContent = cardData.name;
    
    popupSomeCard.classList.add('popup_is-opened')
    
    const closeCard = document.querySelector('.popup_type_image .popup__close');
  
    popupFunctional(popupImage, popupSomeCard, closeCard)
  }

  function popupFunctional (button, popup, closePopup) {
    button.addEventListener('click', () => {
        popup.classList.add('popup_is-opened')
    })

    function popupClose() {
        popup.classList.remove('popup_is-opened') 
    }

    closePopup.addEventListener('click', popupClose)

    document.addEventListener('keydown', (evt) => {
        if (evt.key === 'Escape') {
            popupClose()
        }
    })

    popup.addEventListener('click', (evt) => {
        const isOverlayClick = evt.target.classList.contains('popup');

        if (isOverlayClick) {
            popupClose();
        }
    });
}

const popupEdit = document.querySelector('.popup_type_edit');
const nameInput = document.querySelector('.popup__input_type_name')
const jobInput = document.querySelector('.popup__input_type_description')

const profileTitle = document.querySelector('.profile__title')
const profileDescription = document.querySelector('.profile__description')

nameInput.value = profileTitle.textContent;
jobInput.value = profileDescription.textContent;

function handleFormSubmit(evt) {
    evt.preventDefault(); 
    const name = nameInput.value
    const job = jobInput.value

    profileTitle.textContent = name;
    profileDescription.textContent = job;
   
    popupEdit.classList.remove('popup_is-opened')
}

const newCardPopup = document.querySelector('.popup_type_new-card');
const placesList = document.querySelector('.places__list');
const cardNameInput = document.querySelector('.popup__input_type_card-name')
const cardUrlInput = document.querySelector('.popup__input_type_url')


function addCard(evt) {
  evt.preventDefault();
  
  let newCardData = {
    name: cardNameInput.value,
    link: cardUrlInput.value 
  }
    
  let newCard = createCard(newCardData, deleteCard, likeCard, cardPopup)
  
  placesList.prepend(newCard);
  
  newCardPopup.classList.remove('popup_is-opened')
  
  cardUrlInput.value = '';
  cardNameInput.value ='';
}

  export {cardPopup, popupFunctional, handleFormSubmit, addCard}
