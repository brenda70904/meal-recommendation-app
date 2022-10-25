'use strict';

var list1 = document.getElementById('list1');
list1.getElementsByClassName('anchor')[0].onclick = function (evt) {
  if (list1.classList.contains('visible'))
    list1.classList.remove('visible');
  else
    list1.classList.add('visible');
}


const form = document.querySelector('form');

let allProtein = ['chicken breast', 'chicken thighs', 'pork', 'beef brisket', 'flank steak', 'corned beef', 'ground beef', 'salmon', 'spam', 'egg'];

let allVegFruit = ['garlic', 'ginger', 'onion', 'green onion', 'tomato puree', 'tomato', 'potato', 'green beans', 'peppers', 'mushrooms', 'carrot', 'peas', 'cabbage', 'seaweed', 'hominy', 'guajillo chile', 'cilantro', 'basil', 'lemon', 'lime'];

let allDairy = ['feta cheese', 'parmesan cheese', 'cheddar cheese', 'milk', 'cream', 'butter'];
let allCarbs = ['ramen noodles', 'spaghetti noodles', 'chow mein noodles', 'macaroni', 'bread crumbs', 'rice', 'tortillas'];
let allOther = ['turmeric', 'cumin', 'brown sugar', 'cashews', 'sugar', 'sesame oil', 'cornstarch', 'oregano', 'paprika', 'rice vinegar', 'capers', 'pine nuts', 'soy sauce', 'red curry paste', 'oyster sauce', 'garlic powder', 'balsamic vinegar', 'ketchup', 'mustard', 'hoisin sauce', 'red chili flakes', 'beef bouillon', 'stock'];

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

//Get "checked" ingredients


document.getElementById('ingredientsForm').addEventListener('submit', (e) => {
  e.preventDefault();
  let selected = document.querySelectorAll('input[type=checkbox]:checked');
  for (let i = 0; i < selected.length; i++) {
    console.log(selected[i].value);
  }
}
)
