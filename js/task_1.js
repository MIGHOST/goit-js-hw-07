"use strict";

const categories = document.querySelector("ul#categories");
const elements = document.querySelectorAll("li.item")
const checkCategories = value => console.log (`The list have ${Object.keys(value).length} categories`)
const findElementsInCategory = element => { elements.forEach(
    element => {console.log(`Category - ${element.querySelector("h2").textContent}`);
    console.log(`Quantity elements ${element.querySelector('ul').children.length} `)}
)

}

checkCategories(elements)
findElementsInCategory(elements)