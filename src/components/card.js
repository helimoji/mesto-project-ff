import {
  deleteYouCard,
  likeSomeCard,
  deleteLikeSomeCard,
} from "../components/api.js";

const cardTemplate = document.querySelector("#card-template").content;

function createCard(
  cardData,
  deleteCardCallback,
  likeButtonCallback,
  openCardPopup,
  profileId
) {
  const cardPlacesItem = cardTemplate.querySelector(".places__item").cloneNode(true);
  const cardImage = cardPlacesItem.querySelector(".card__image");
  const cardTitle = cardPlacesItem.querySelector(".card__title");
  const cardLikes = cardPlacesItem.querySelector(".card__like-number");
  const numberLikes = cardData.likes.length;
  const cardId = cardData._id;
  const cardDeleteButton = cardPlacesItem.querySelector(".card__delete-button");
  const likeIds = cardData.likes.map((like) => like._id);
  const likeButton = cardPlacesItem.querySelector(".card__like-button");

  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;
  cardTitle.textContent = cardData.name;
  cardLikes.textContent = numberLikes;

  if (cardData.owner._id === profileId) {
    cardDeleteButton.addEventListener("click", () => {
      deleteYouCard(cardId)
        .then(() => {
          deleteCardCallback(cardPlacesItem);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  } else {
    cardDeleteButton.style.display = "none";
  }

  likeButton.addEventListener("click", () => {
    if (likeButton.classList.contains("card__like-button_is-active")) {
      deleteLikeSomeCard(cardId)
        .then((data) => {
          const likeIds = data.likes.map((like) => like._id);
          cardLikes.textContent = likeIds.length;
          likeButtonCallback(likeButton);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      likeSomeCard(cardId)
        .then((data) => {
          const likeIds = data.likes.map((like) => like._id);
          cardLikes.textContent = likeIds.length;
          likeButtonCallback(likeButton);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  });

  if (likeIds.includes(profileId)) {
    likeButton.classList.add("card__like-button_is-active");
  } else {
    likeButton.classList.remove("card__like-button_is-active");
  }

  cardImage.addEventListener("click", () => {
    openCardPopup(cardData);
  });
  return cardPlacesItem;
}

function likeCard(button) {
  button.classList.toggle("card__like-button_is-active");
}

function deleteCard(item) {
  item.remove();
}

export { createCard, likeCard, deleteCard };
