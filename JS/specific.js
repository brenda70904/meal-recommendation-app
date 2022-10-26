'use strict'
let description = JSON.parse(localStorage.getItem('description'));
console.log(description)

let cookThis = '';
  for (let i = 0; i < allRecipes.length; i++) {
    if (description === allRecipes[i].name) {
    cookThis = allRecipes[i];
    }
  }

console.log(cookThis);// object

let image = document.querySelector('img');
image.src = cookThis.src;
let title = document.createElement('h2');
title.textContent = cookThis.name;
let ul = document.querySelector('#imgAndList ul');
ul.appendChild(title);
for (let i = 0; i < cookThis.ingredientsDetail.length; i++) {
  let li = document.createElement('li');
  li.innerText = cookThis.ingredientsDetail[i];
  ul.appendChild(li);
}
let ol = document.querySelector('ol');
for (let i = 0; i < cookThis.direction.length; i++) {
  let li = document.createElement('li');
  li.innerText = cookThis.direction[i];
  ol.appendChild(li);
}
