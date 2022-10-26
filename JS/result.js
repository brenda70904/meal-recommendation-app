'use strict';

let result = JSON.parse(localStorage.getItem('results'));
let allRecipes = JSON.parse(localStorage.getItem('allRecipes'));
// console.log(allRecipes);

function saveToLocalStorage(event) {
  let description = event.target.id;
  console.log(typeof description);
  let stringData = JSON.stringify(description);
  localStorage.setItem('description', stringData);
  window.location.href = "specific.html";
}

function renderResults() {
  let div = document.getElementById('grid');
  if(result == ''){
    let h2 = document.querySelector('h2');
    h2.innerText = 'No Matches Found! Best Matches:';
    for (let i = 0; i < allRecipes.length; i++) {
      if(allRecipes[i].ingredientsNeeded.length === 1){
        let article = document.createElement('article');
    
        let title = document.createElement('p');
        title.innerText = allRecipes[i].name;
    
        let div1 = document.createElement('div');
        div1.setAttribute('class', 'picBlock');
    
        let div2 = document.createElement('div');
        div2.setAttribute('class', 'servesTime');

        let div3 = document.createElement('div');
        div3.setAttribute('class', 'servesTime');
    
        let serveP = document.createElement('p');
        serveP.innerText = `Serves: ${allRecipes[i].serves} people`;
    
        let timesP = document.createElement('p');
        timesP.innerText = `Time: ${allRecipes[i].time} mins`;

        let neededP = document.createElement('p');
        neededP.innerText = `Need: ${allRecipes[i].ingredientsNeeded[0]}`;

        let image = document.createElement('img');
        image.setAttribute('id', allRecipes[i].name);
      
        image.src = allRecipes[i].src;
        div.appendChild(article);
        article.appendChild(div1);
        div1.appendChild(image);
        article.appendChild(title);
        article.appendChild(div2);
        div2.appendChild(serveP);
        div2.appendChild(timesP);
        article.appendChild(div3);
        div3.appendChild(neededP);
    
        article.addEventListener('click', saveToLocalStorage);
      }
    }
  } else {
      for (let i = 0; i < result.length; i++) {
      let article = document.createElement('article');

      let title = document.createElement('p');
      title.innerText = result[i].name;

      let div1 = document.createElement('div');
      div1.setAttribute('class', 'picBlock');

      let div2 = document.createElement('div');
      div2.setAttribute('class', 'servesTime');

      let serveP = document.createElement('p');
      serveP.innerText = `Serves: ${result[i].serves} people`;

      let timesP = document.createElement('p');
      timesP.innerText = `Time: ${result[i].time} mins`;
      let image = document.createElement('img');
      image.setAttribute('id', result[i].name);
    
      image.src = result[i].src;
      div.appendChild(article);
      article.appendChild(div1);
      div1.appendChild(image);
      article.appendChild(title);
      article.appendChild(div2);
      div2.appendChild(serveP);
      div2.appendChild(timesP);

      article.addEventListener('click', saveToLocalStorage);
    }
  }
}
renderResults();

// console.log(typeof article);
