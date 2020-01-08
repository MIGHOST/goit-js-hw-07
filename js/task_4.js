"use strict";
let click = 0;

let counterValue  = document.querySelector("#value");

let increment = () =>  {click +=1; counterValue.textContent = click}

let decrement = () => { click -=1; counterValue.textContent = click};

const incrementButton = document.querySelector('[data-action="increment"]');
const decrementButton = document.querySelector('[data-action="decrement"]');

incrementButton.addEventListener("click", increment)
decrementButton.addEventListener("click", decrement)