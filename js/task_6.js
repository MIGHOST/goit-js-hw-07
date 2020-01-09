"use strict";

const validInput = document.querySelector("#validation-input");

const changeInputField = event => { 
    const dataValue = Number(event.currentTarget.dataset.length);
    const valueLength = event.currentTarget.value.length;

    if(dataValue === valueLength) {
        validInput.classList.add("valid");
        validInput.classList.remove("invalid");
        return;
    }
    validInput.classList.remove("valid");
    validInput.classList.add("invalid");
}

validInput.addEventListener('blur', changeInputField)