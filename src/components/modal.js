import { renderLoading } from "../components/validation.js";
import {
  popups,
  popupEdit,
  nameInput,
  jobInput,
  profileTitle,
  profileDescription,
  newPlaceForm,
  newCardPopup,
  AvatarPopup,
  editAvatarForm,
  popupSomeCard,
  popupImage,
  popupCaption,
  saveEditProf,
  saveNewPlase,
  saveNewAvatar
} from "./constant.js";

function escClose(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".popup_is-opened");
    closePopup(openedPopup);
  }
}

function openPopup(popup) {
  popup.classList.add("popup_is-opened");
  document.addEventListener("keydown", escClose);
}

function closePopup(popup) {
  popup.classList.remove("popup_is-opened");
  document.removeEventListener("keydown", escClose);
}

function resetForm(form) {
  form.reset();
}

popups.forEach((popup) => {
  popup.addEventListener("click", (evt) => {
    if (
      evt.target === evt.currentTarget ||
      evt.target.classList.contains("popup__close")
    ) {
      closePopup(popup);
    }
  });
});

function cardPopup(cardData) {
  popupImage.src = cardData.link;
  popupImage.alt = cardData.name;
  popupCaption.textContent = cardData.name;
  openPopup(popupSomeCard);
}

function changeProfFormSubmit() {
  renderLoading(true, saveEditProf);
  profileTitle.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  closePopup(popupEdit)
}

function addCard() {
  renderLoading(true, saveNewPlase);
  closePopup(newCardPopup);
  newPlaceForm.reset();
}

function newAvatar() {
  openPopup(AvatarPopup);
}

function changeAvatarFormSubmit() {
  renderLoading(true, saveNewAvatar);
  closePopup(AvatarPopup);
  editAvatarForm.reset();
}

export {
  openPopup,
  closePopup,
  cardPopup,
  resetForm,
  changeProfFormSubmit,
  addCard,
  newAvatar,
  changeAvatarFormSubmit,
};
