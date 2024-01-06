import {createCard, likeCard, deleteCard} from '../components/card.js';

function escClose(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_is-opened');
    closePopup(openedPopup);
    closeResetFormPopup(newPlaceForm);
  }
}

function openPopup(popup) {
  popup.classList.add('popup_is-opened');
  document.addEventListener('keydown', escClose);
}

function closePopup(popup) {
  popup.classList.remove('popup_is-opened');
  document.removeEventListener('keydown', escClose); 
}
function closeResetFormPopup(form) {
  form.reset()
}

const popups = document.querySelectorAll('.popup'); 

popups.forEach((popup) => {
popup.addEventListener('click', (evt) => {
if (evt.target === evt.currentTarget || evt.target.classList.contains('popup__close')){
closePopup(popup);
closeResetFormPopup(newPlaceForm);
}
});
});

function cardPopup(cardData) {
    const popupSomeCard = document.querySelector('.popup_type_image');
    const popupImage = document.querySelector('.popup__image');
    const popupCaption = document.querySelector('.popup__caption');
  
    popupImage.src = cardData.link;
    popupImage.alt = cardData.name;
    popupCaption.textContent = cardData.name;
    
    openPopup(popupSomeCard)
  }



const popupEdit = document.querySelector('.popup_type_edit');
const nameInput = document.querySelector('.popup__input_type_name')
const jobInput = document.querySelector('.popup__input_type_description')

const profileTitle = document.querySelector('.profile__title')
const profileDescription = document.querySelector('.profile__description')

nameInput.value = profileTitle.textContent;
jobInput.value = profileDescription.textContent;

function changeProfFormSubmit(evt) {
    evt.preventDefault(); 

    const name = nameInput.value
    const job = jobInput.value

    profileTitle.textContent = name;
    profileDescription.textContent = job;
    
    closePopup(popupEdit)
}

const newPlaceForm = document.querySelector("[name='new-place']")
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
  
  closePopup(newCardPopup)
  
  newPlaceForm.reset() 
}


  export {openPopup, closePopup, cardPopup, changeProfFormSubmit, addCard}
