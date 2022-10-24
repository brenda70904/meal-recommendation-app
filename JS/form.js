'use strict';

var checkList = document.getElementById('list1');
checkList.getElementsByClassName('anchor')[0].onclick = function(evt) {
  if (checkList.classList.contains('visible'))
    checkList.classList.remove('visible');
  else
    checkList.classList.add('visible');
}

const form = document.querySelector('form');

let allProtein = ['chicken breast', 'chicken thighs', 'pork', 'beef brisket', 'flank steak', 'corned beef', 'ground beef', 'salmon', 'spam', 'egg'];

let allVegFruit = ['garlic', 'ginger', 'onion', 'green onion', 'tomato puree', 'tomato', 'potato', 'green beans', 'peppers', 'mushrooms', 'carrot', 'peas', 'cabbage','seaweed', 'hominy', 'guajillo chile', 'cilantro', 'basil', 'lemon', 'lime'];

let allDairy = ['feta cheese', 'parmesan cheese', 'cheddar cheese', 'milk', 'cream', 'butter'];
let allCarbs = ['ramen noodles', 'spaghetti noodles', 'chow mein noodles', 'macaroni', 'bread crumbs', 'rice', 'tortillas'];
let allOther = ['turmeric', 'cumin', 'brown sugar', 'cashews', 'sugar' , 'sesame oil', 'cornstarch' , 'oregano' , 'paprika' , 'rice vinegar', 'capers' , 'pine nuts', 'soy sauce' , 'red curry paste' , 'oyster sauce' , 'garlic powder' , 'balsamic vinegar' , 'ketchup' , 'mustard' , 'hoisin sauce' , 'red chili flakes' , 'beef bouillon' , 'stock'];

let listOne = document.getElementById('proteins');

for (let i = 0; i < allProtein.length; i++) {
  let li = document.createElement('li');
  let input = document.createElement('input');
  let label = document.createElement('label');
  input.type = 'checkbox';
  input.setAttribute('id', allProtein[i]);
  label.setAttribute('for', allProtein[i]);
  label.innerText = allProtein[i];
  listOne.appendChild(li);
  li.appendChild(input);
  li.appendChild(label);
}
