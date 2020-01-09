"use strict";

const inputText = document.querySelector("#name-input")
const outputText = document.querySelector("#name-output")

const changeName = text => {
    if (!text.currentTarget.value.length){
    outputText.textContent = "незнакомец";
    return}
    outputText.textContent=text.currentTarget.value
} 

inputText.addEventListener("input", changeName);
