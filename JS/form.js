'use strict';

var list1 = document.getElementById('list1');
var list2 = document.getElementById('list2');
var list3 = document.getElementById('list3');
var list4 = document.getElementById('list4');
var list5 = document.getElementById('list5');
var list6 = document.getElementById('list6');

let dropList = [list1, list2, list3, list4, list5, list6];
for (let i = 0; i < dropList.length; i++) {
  dropList[i].getElementsByClassName('anchor')[0].onclick = function (evt) {
    if (dropList[i].classList.contains('visible'))
      dropList[i].classList.remove('visible');
    else
      dropList[i].classList.add('visible');
  }
}

const form = document.querySelector('form');

let allProtein = ['(select all proteins)', 'chicken breast', 'chicken thighs', 'pork', 'beef brisket', 'flank steak', 'corned beef', 'ground beef', 'salmon', 'spam', 'egg', 'black beans'].sort();
let allVegFruit = ['(select all veg/fruit)', 'garlic', 'ginger', 'onion', 'green onion', 'tomato', 'potato', 'green beans', 'peppers', 'mushrooms', 'carrot', 'peas', 'cabbage', 'seaweed', 'hominy', 'guajillo chile', 'cilantro', 'basil', 'lemon', 'lime', 'bok choy', 'broccoli', 'edamame', 'corn'].sort();
let allDairy = ['(select all dairy)', 'feta cheese', 'parmesan cheese', 'cheddar cheese', 'cheese blend', 'milk', 'cream', 'butter', 'coconut milk', 'yogurt'].sort();
let allCarbs = ['(select all carbs)', 'ramen noodles', 'spaghetti noodles', 'chow mein noodles', 'macaroni noodles', 'bread crumbs', 'rice', 'tortillas', 'bread'].sort();
let allSpices = ['(select all spices)', 'turmeric', 'cumin', 'oregano', 'paprika', 'parsley', 'garlic powder', 'red chili flakes', 'yellow curry powder', 'cayenne pepper', 'chili powder', 'rosemary'].sort();
let allOther = ['(select all other)', 'brown sugar', 'cashews', 'sugar', 'sesame oil', 'cornstarch', 'rice vinegar', 'capers', 'pine nuts', 'red curry paste', 'soy sauce', 'oyster sauce', 'balsamic vinegar', 'vinegar','ketchup', 'mustard', 'hoisin sauce', 'beef bouillon', 'stock', 'honey', 'enchilada sauce', 'flour', 'baking soda'].sort();

let listOne = document.getElementById('proteins');
let listTwo = document.getElementById('vegetables');
let listThree = document.getElementById('dairy');
let listFour = document.getElementById('carbs');
let listFive = document.getElementById('spices');
let listSix = document.getElementById('other');

let options = {
  name: ['allProtein', 'allVegFruit', 'allDairy', 'allCarbs', 'allSpices', 'allOther'],
  items: [allProtein, allVegFruit, allDairy, allCarbs, allSpices, allOther]
}
let allList = [listOne, listTwo, listThree, listFour, listFive, listSix];

for (let i = 0; i < options.items.length; i++) {
  for (let j = 0; j < options.items[i].length; j++) {
    let li = document.createElement('li');
    let input = document.createElement('input');
    let label = document.createElement('label');
    input.setAttribute('value', options.items[i][j]);
    input.type = 'checkbox';
    input.setAttribute('name', options.name[i]);
    input.setAttribute('id', options.items[i][j]);
    if (j === 0){
      input.setAttribute('class', '(select all)');
    }
    label.setAttribute('for', options.items[i][j]);
    label.innerText = options.items[i][j];
    allList[i].appendChild(li);
    li.appendChild(input);
    li.appendChild(label);
  }
}

function selectAll() {
  console.log('worked')
  for(let i = 0; i < selectAllbtn.length; i++){
    console.log(`${selectAllbtn[i].name}: `, selectAllbtn[i].checked);
    if(selectAllbtn[i].checked === true){
      console.log('name: ', options.name[i]);
      for(let j = 0; j < options.items[i].length; j++){
        let listItem = document.getElementsByName(options.name[i]);
        listItem[j].checked = true;
      }
    }
  }
}

let selectAllbtn = document.getElementsByClassName('(select all)');
for (let i = 0; i < selectAllbtn.length; i++){
  selectAllbtn[i].addEventListener('click', selectAll);
}

let cb = document.querySelectorAll('input');
let myIngredients = [];

function getMyIngredients(event) {
  event.preventDefault();
  for (let i = 0; i < allCarbs.length + allDairy.length + allOther.length + allProtein.length + allVegFruit.length + allSpices.length; i++) {
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
