const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
  }; 


//функция показывающая ошибку
function showInputError(formElement, inputElement, errorMessage) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(validationConfig.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(validationConfig.errorClass);
}

//функция скрывающая ошибку
function hideInputError(formElement, inputElement) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(validationConfig.inputErrorClass);
    errorElement.classList.remove(validationConfig.errorClass);
    errorElement.textContent = '';
}

//функция проверяющая валидность инпутов
function checkInputValid(formElement, inputElement) {
    if (inputElement.validity.patternMismatch) {
        inputElement.setCustomValidity(inputElement.dataset.errorMessage);
      } 
    else {
        inputElement.setCustomValidity('');
      }

    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage)
        }
    else {
        hideInputError(formElement, inputElement)
        }
}

// проверяем невалидность инпутов(наличие ошибки)
function hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid
    })
}

// меняет доступ к кнопке
function toggleButtonState(inputList, buttonElement) {
    if (hasInvalidInput(inputList)) {
        buttonElement.setAttribute("disabled", true);
        buttonElement.classList.add(validationConfig.inactiveButtonClass)
    }
    else {
        buttonElement.removeAttribute("disabled", true);
        buttonElement.classList.remove(validationConfig.inactiveButtonClass)
    }
    }
    
// функция вешающая слушатель набора текста на каждый инпут
function setEventListeners(formElement) {
    const inputList = Array.from(formElement.querySelectorAll(validationConfig.inputSelector));
    const buttonElement = formElement.querySelector(validationConfig.submitButtonSelector);
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
        checkInputValid(formElement, inputElement)
        toggleButtonState(inputList, buttonElement)
    });

    })
}

// функция вызова валидации сос всем функционалом
function setEventListener() {
    const formList = Array.from(document.querySelectorAll(validationConfig.formSelector))
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
          });
        setEventListeners(formElement)
    })
}

//функция очищает ошибки валидации формы и делает кнопку неактивной
function clearValidation(formElement) {
    const inputList = Array.from(formElement.querySelectorAll(validationConfig.inputSelector));
    const buttonElement = formElement.querySelector(validationConfig.submitButtonSelector);

    buttonElement.setAttribute("disabled", true);
    buttonElement.classList.add(validationConfig.inactiveButtonClass)
    inputList.forEach((inputElement) => {
        hideInputError(formElement, inputElement)
    })
}

function enableValidation() {
    const formList = Array.from(document.querySelectorAll(validationConfig.formSelector))
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
          });
        setEventListeners(formElement)
    })
}

export{clearValidation, enableValidation}