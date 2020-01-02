"use strict";

const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];

const listVegetables = document.querySelector("#ingredients");

function createElement(text) {
    const item = document.createElement("li");
    item.textContent = text;
    return item;

}

const arrListVegetables = ingredients.map(item => createElement(item))

listVegetables.append(...arrListVegetables)