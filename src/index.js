import "./pages/index.css";
import {
  openPopup,
  changeProfFormSubmit,
  addCard,
  newAvatar,
  changeAvatarFormSubmit,
  resetForm,
  cardPopup,
} from "./components/modal.js";
import {
  clearValidation,
  enableValidation,
  renderLoading,
} from "./components/validation.js";
import {
  getProfileData,
  getinitialCard,
  changeProfData,
  addNewCard,
  changeAvatar,
} from "./components/api.js";
import {
  validationConfig,
  chageProfButton,
  popupEdit,
  addCardButton,
  newCardPopup,
  editProfileForm,
  nameInput,
  jobInput,
  profileTitle,
  profileDescription,
  cardNameInput,
  cardUrlInput,
  newPlaceForm,
  profImage,
  editAvatarForm,
  placesList,
  newAvatarInput,
  saveEditProf,
  saveNewPlase,
  saveNewAvatar,
} from "./components/constant.js";
import { createCard, likeCard, deleteCard } from "./components/card.js";

enableValidation(validationConfig);

let profileId;
Promise.all([getProfileData(), getinitialCard()])
  .then(([userData, cardsData]) => {
    profileId = userData._id;
    profileTitle.textContent = userData.name;
    profileDescription.textContent = userData.about;
    profImage.style.backgroundImage = `url(${userData.avatar})`;

    cardsData.forEach((card) => {
      const someCard = createCard(
        card,
        deleteCard,
        likeCard,
        cardPopup,
        profileId
      );
      placesList.append(someCard);
    });
  })
  .catch((err) => {
    console.log(err);
  });

profImage.addEventListener("click", () => {
  resetForm(editAvatarForm);
  newAvatar();
  clearValidation(validationConfig, editAvatarForm);
});

editAvatarForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const AvatarValue = newAvatarInput.value;
  changeAvatar(AvatarValue)
    .then(() => {
      profImage.style.backgroundImage = `url(${AvatarValue})`;
      changeAvatarFormSubmit();
    })
    .finally(() => {
      renderLoading(false, saveNewAvatar);
    })
    .catch((err) => {
      console.log(err);
    });
});

chageProfButton.addEventListener("click", () => {
  openPopup(popupEdit);
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileDescription.textContent;
  clearValidation(validationConfig, editProfileForm);
});

editProfileForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const newName = nameInput.value;
  const newAbout = jobInput.value;
  changeProfData(newName, newAbout)
    .then(() => {
      profileTitle.textContent = newName;
      profileDescription.textContent = jobInput.value;
      changeProfFormSubmit();
    })
    .finally(() => {
      renderLoading(false, saveEditProf);
    })
    .catch((err) => {
      console.log(err);
    });
});

addCardButton.addEventListener("click", () => {
  resetForm(newPlaceForm);
  openPopup(newCardPopup);
  clearValidation(validationConfig, newPlaceForm);
});

newPlaceForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const newCardData = {
    name: cardNameInput.value,
    link: cardUrlInput.value,
  };
  addNewCard(newCardData)
    .then((card) => {
      const newCard = createCard(
        card,
        deleteCard,
        likeCard,
        cardPopup,
        profileId
      );
      placesList.prepend(newCard);
      addCard();
    })
    .finally(() => {
      renderLoading(false, saveNewPlase);
    })
    .catch((err) => {
      console.log(err);
    });
});
