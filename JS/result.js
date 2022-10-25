'use strict';

let result = JSON.parse(localStorage.getItem('results'));
console.log(result);

function renderResults() {
  let div = document.getElementById('grid');
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
    image.src = result[i].src;
    div.appendChild(article);
    article.appendChild(div1);
    div1.appendChild(image);
    article.appendChild(title);
    article.appendChild(div2);
    div2.appendChild(serveP);
    div2.appendChild(timesP);
  }
}
renderResults();
