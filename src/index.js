import './pages/index.css';
import {openPopup, changeProfFormSubmit, addCard, newAvatar, changeAvatarFormSubmit} from './components/modal.js';
import {clearValidation, enableValidation} from './components/validation.js'
import {profImage, editAvatarForm} from './components/modal.js';


profImage.addEventListener('click', newAvatar)
editAvatarForm.addEventListener('submit', changeAvatarFormSubmit)

const chageProfButton = document.querySelector('.profile__edit-button');
const popupEdit = document.querySelector('.popup_type_edit');

chageProfButton.addEventListener('click', () => {
    openPopup(popupEdit);
    nameInput.value = profileTitle.textContent;
    jobInput.value = profileDescription.textContent;
    clearValidation(editProfileForm);
})

const addCardButton = document.querySelector('.profile__add-button');
const newCardPopup = document.querySelector('.popup_type_new-card');

addCardButton.addEventListener('click', () => {
    openPopup(newCardPopup);
    clearValidation(newPlaceForm)
})

const editProfileForm = document.querySelector("[name='edit-profile']")
const nameInput = document.querySelector('.popup__input_type_name')
const jobInput = document.querySelector('.popup__input_type_description')

const profileTitle = document.querySelector('.profile__title')
const profileDescription = document.querySelector('.profile__description')

editProfileForm.addEventListener('submit', changeProfData);
editProfileForm.addEventListener('submit', changeProfFormSubmit);

const newPlaceForm = document.querySelector("[name='new-place']")

newPlaceForm.addEventListener('submit', addCard)

enableValidation()

// API
import {getProfileData, getinitialCard, changeProfData} from './components/api.js'
getProfileData();
getinitialCard();