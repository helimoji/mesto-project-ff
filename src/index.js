import './pages/index.css';
import {initialCards, createCard, likeCard, deleteCard} from './components/cards.js'
import {cardPopup, popupFunctional, handleFormSubmit, addCard} from './components/modal.js';

const cardTemplate = document.querySelector('#card-template').content;
const placesList = document.querySelector('.places__list');

initialCards.forEach((item) => {
    const newCard = createCard(item, deleteCard, likeCard, cardPopup);
    placesList.append(newCard);
})

const chageProfButton = document.querySelector('.profile__edit-button');
const popupEdit = document.querySelector('.popup_type_edit');
const closeEdit = document.querySelector('.popup_type_edit .popup__close');

const addCardButton = document.querySelector('.profile__add-button');
const newCardPopup = document.querySelector('.popup_type_new-card');
const closeAdd = document.querySelector('.popup_type_new-card .popup__close');

popupFunctional(chageProfButton, popupEdit, closeEdit);
popupFunctional(addCardButton, newCardPopup, closeAdd);

const editProfileForm = document.querySelector("[name='edit-profile']")
const nameInput = document.querySelector('.popup__input_type_name')
const jobInput = document.querySelector('.popup__input_type_description')

const profileTitle = document.querySelector('.profile__title')
const profileDescription = document.querySelector('.profile__description')

nameInput.value = profileTitle.textContent;
jobInput.value = profileDescription.textContent;

editProfileForm.addEventListener('submit', handleFormSubmit);


// Добавление новой карточки
// объявление формы и инпутов
const newPlaceForm = document.querySelector("[name='new-place']")
const cardNameInput = document.querySelector('.popup__input_type_card-name')
const cardUrlInput = document.querySelector('.popup__input_type_url')

newPlaceForm.addEventListener('submit', addCard)