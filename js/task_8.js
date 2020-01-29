"use strict";
const box = document.querySelector("#boxes")
const input1 = document.querySelector("#controls > input");
const btnMade = document.querySelector('button[data-action="render"]');
const btnClose = document.querySelector("button[data-action='destroy']");


function madeColor() {
    return `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`

};

function createBoxes(amount) {
    let size = 30;
    for (let i = 1; i <= amount; i++) {
        const item = document.createElement("div");
        item.style.backgroundColor = madeColor();
        item.style.width = `${size}px`;
        item.style.height = `${size}px`;
        box.append(item);
        size += 10;

    }

};

function destroyBoxes() {
    box.innerHTML = "";
};

btnMade.addEventListener("click", function (event) {
    createBoxes(input1.value)
});

btnClose.addEventListener("click", destroyBoxes)