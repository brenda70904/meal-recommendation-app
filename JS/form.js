'use strict';

var list1 = document.getElementById('list1');
list1.getElementsByClassName('anchor')[0].onclick = function (evt) {
  if (list1.classList.contains('visible'))
    list1.classList.remove('visible');
  else
    list1.classList.add('visible');
}

var list2 = document.getElementById('list2');
list2.getElementsByClassName('anchor')[0].onclick = function (evt) {
  if (list2.classList.contains('visible'))
    list2.classList.remove('visible');
  else
    list2.classList.add('visible');
}


var list3 = document.getElementById('list3');
list3.getElementsByClassName('anchor')[0].onclick = function (evt) {
  if (list3.classList.contains('visible'))
    list3.classList.remove('visible');
  else
    list3.classList.add('visible');
}


var list4 = document.getElementById('list4');
list4.getElementsByClassName('anchor')[0].onclick = function (evt) {
  if (list4.classList.contains('visible'))
    list4.classList.remove('visible');
  else
    list4.classList.add('visible');
}

var list5 = document.getElementById('list5');
list5.getElementsByClassName('anchor')[0].onclick = function (evt) {
  if (list5.classList.contains('visible'))
    list5.classList.remove('visible');
  else
    list5.classList.add('visible');
}

const form = document.querySelector('form');

let allProtein = ['chicken breast', 'chicken thighs', 'pork', 'beef brisket', 'flank steak', 'corned beef', 'ground beef', 'salmon', 'spam', 'egg', 'black beans'].sort();

let allVegFruit = ['garlic', 'ginger', 'onion', 'green onion', 'tomato', 'potato', 'green beans', 'peppers', 'mushrooms', 'carrot', 'peas', 'cabbage', 'seaweed', 'hominy', 'guajillo chile', 'cilantro', 'basil', 'lemon', 'lime','bok choy', 'broccoli', 'edamame', 'corn'].sort();

let allDairy = ['feta cheese', 'parmesan cheese', 'cheddar cheese', 'cheese blend', 'milk', 'cream', 'butter','coconut milk', 'yogurt'].sort();
let allCarbs = ['ramen noodles', 'spaghetti noodles', 'chow mein noodles', 'macaroni noodles', 'bread crumbs', 'rice', 'tortillas', 'bread'].sort();
let allOther = ['turmeric', 'cumin', 'brown sugar', 'cashews', 'sugar', 'sesame oil', 'cornstarch', 'oregano', 'paprika', 'parsley', 'rice vinegar', 'capers', 'pine nuts', 'soy sauce', 'red curry paste', 'soy sauce', 'oyster sauce', 'garlic powder', 'balsamic vinegar', 'ketchup', 'mustard', 'hoisin sauce', 'red chili flakes', 'beef bouillon', 'stock', 'honey', 'enchilada sauce','yellow curry powder', 'cayenne pepper', 'flour', 'chili powder', 'baking soda'].sort();

let listOne = document.getElementById('proteins');
let listTwo = document.getElementById('vegetables');
let listThree = document.getElementById('dairy');
let listFour = document.getElementById('carbs');
let listFive = document.getElementById('other');

for (let i = 0; i < allProtein.length; i++) {
  let li = document.createElement('li');
  let input = document.createElement('input');
  let label = document.createElement('label');
  input.setAttribute('value', allProtein[i]);
  input.type = 'checkbox';
  input.setAttribute('id', allProtein[i]);
  label.setAttribute('for', allProtein[i]);
  label.innerText = allProtein[i];
  listOne.appendChild(li);
  li.appendChild(input);
  li.appendChild(label);
}

for (let i = 0; i < allVegFruit.length; i++) {
  let li = document.createElement('li');
  let input = document.createElement('input');
  let label = document.createElement('label');
  input.setAttribute('value', allVegFruit[i]);
  input.type = 'checkbox';
  input.setAttribute('id', allVegFruit[i]);
  label.setAttribute('for', allVegFruit[i]);
  label.innerText = allVegFruit[i];
  listTwo.appendChild(li);
  li.appendChild(input);
  li.appendChild(label);
}

for (let i = 0; i < allDairy.length; i++) {
  let li = document.createElement('li');
  let input = document.createElement('input');
  let label = document.createElement('label');
  input.setAttribute('value', allDairy[i]);
  input.type = 'checkbox';
  input.setAttribute('id', allDairy[i]);
  label.setAttribute('for', allDairy[i]);
  label.innerText = allDairy[i];
  listThree.appendChild(li);
  li.appendChild(input);
  li.appendChild(label);
}

for (let i = 0; i < allCarbs.length; i++) {
  let li = document.createElement('li');
  let input = document.createElement('input');
  let label = document.createElement('label');
  input.setAttribute('value', allCarbs[i]);
  input.type = 'checkbox';
  input.setAttribute('id', allCarbs[i]);
  label.setAttribute('for', allCarbs[i]);
  label.innerText = allCarbs[i];
  listFour.appendChild(li);
  li.appendChild(input);
  li.appendChild(label);
}

for (let i = 0; i < allOther.length; i++) {
  let li = document.createElement('li');
  let input = document.createElement('input');
  let label = document.createElement('label');
  input.setAttribute('value', allOther[i]);
  input.type = 'checkbox';
  input.setAttribute('id', allOther[i]);
  label.setAttribute('for', allOther[i]);
  label.innerText = allOther[i];
  listFive.appendChild(li);
  li.appendChild(input);
  li.appendChild(label);
}

let cb = document.querySelectorAll('input');
let myIngredients = [];

function getMyIngredients(event) {
  event.preventDefault();
  for (let i = 0; i < allCarbs.length + allDairy.length + allOther.length + allProtein.length + allVegFruit.length; i++) {
    if (cb[i].checked === true) {
      myIngredients.push(cb[i].id);
    }
  }
  saveLocalStorage();
  window.location.href = "results.html";
}

let submit = document.getElementById('submit');
submit.addEventListener('click', getMyIngredients);

let results = [];
function saveLocalStorage() {
  for (let i = 0; i < allRecipes.length; i++) {
    let match = true;
    for (let j = 0; j < allRecipes[i].ingredients.length; j++) {
      if (myIngredients.includes(allRecipes[i].ingredients[j])) {
      } else {
        match = false;
        break;
      }
    }
    for (let j = 0; j < allRecipes[i].ingredientsNeeded.length; j) {
      if (myIngredients.includes(allRecipes[i].ingredientsNeeded[j])) {
        allRecipes[i].ingredientsNeeded = allRecipes[i].ingredientsNeeded.filter(e => e !== allRecipes[i].ingredientsNeeded[j]);
      } else {
        j++;
      }
    }
    if (match === true) {
      results.push(allRecipes[i]);
    }
  }
  localStorage.clear();
  let stringData = JSON.stringify(results);
  localStorage.setItem('results', stringData);
  let allRecipesData = JSON.stringify(allRecipes);
  localStorage.setItem('allRecipes', allRecipesData);
}
