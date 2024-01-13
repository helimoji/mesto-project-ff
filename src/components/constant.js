const chageProfButton = document.querySelector(".profile__edit-button");
const addCardButton = document.querySelector(".profile__add-button");
const editProfileForm = document.querySelector("[name='edit-profile']");

const popups = document.querySelectorAll(".popup");
const popupEdit = document.querySelector(".popup_type_edit");
const nameInput = document.querySelector(".popup__input_type_name");
const jobInput = document.querySelector(".popup__input_type_description");

const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");

const newPlaceForm = document.querySelector("[name='new-place']");
const newCardPopup = document.querySelector(".popup_type_new-card");
const placesList = document.querySelector(".places__list");
const cardNameInput = document.querySelector(".popup__input_type_card-name");
const cardUrlInput = document.querySelector(".popup__input_type_url");

const AvatarPopup = document.querySelector(".popup_type_avatar");
const newAvatarInput = document.querySelector(".popup__input_type_avatar");
const profImage = document.querySelector(".profile__image");
const editAvatarForm = document.querySelector("[name='edit-avatar']");

const popupSomeCard = document.querySelector(".popup_type_image");
const popupImage = document.querySelector(".popup__image");
const popupCaption = document.querySelector(".popup__caption");

const saveEditProf = document.querySelector(".save-edit-profile__button")
const saveNewPlase = document.querySelector(".save-new-place__button")
const saveNewAvatar = document.querySelector(".save-avatar__button")

const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

export {
  chageProfButton,
  addCardButton,
  editProfileForm,
  popups,
  popupEdit,
  nameInput,
  jobInput,
  profileTitle,
  profileDescription,
  newPlaceForm,
  newCardPopup,
  placesList,
  cardNameInput,
  cardUrlInput,
  AvatarPopup,
  newAvatarInput,
  profImage,
  editAvatarForm,
  popupSomeCard,
  popupImage,
  popupCaption,
  validationConfig,
  saveEditProf,
  saveNewPlase,
  saveNewAvatar
};
