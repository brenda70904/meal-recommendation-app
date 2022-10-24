'use strict'

let results = [];

for (let i = 0; i < allRecipes.length; i++) {
  let match = true;
  for (let j = 0; j < allRecipes.ingredients.length; j++) {
    if(myIngredients.includes(allRecipes[i].ingredients[j])) {
    } else {
      match = false;
      break;
    }
    if (match === true) {
      results.push(allRecipes[i]);
    }
  }
}
