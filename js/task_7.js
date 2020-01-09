"use strict";

const sizeController = document.querySelector("#font-size-control");
const mainText = document.querySelector("#text");

const changeTextSize = event => {
    mainText.style.fontSize = `${event.currentTarget.value}px`;
}

sizeController.addEventListener("input", changeTextSize)