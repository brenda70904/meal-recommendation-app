'use strict';

let result = JSON.parse(localStorage.getItem('results'));
// console.log(result);

function saveToLocalStorage(event) {
  // console.log(event.target)
  let description = event.target.id;
  // let imageSource = event.target.src;
  // let detailInstruc = event.target.alt;
  console.log(typeof description);//string
  let stringData = JSON.stringify(description);
  // let imageData = JSON.stringify(imageSource);
  // let detailData = JSON.stringify(detailInstruc);
  localStorage.setItem('description', stringData);
  // localStorage.setItem('imageData',imageData);
  // localStorage.setItem('dataInstruc',detailData);
  
  window.location.href = "specific.html";
}

function renderResults() {
  let div = document.getElementById('grid');
  for (let i = 0; i < result.length; i++) {
    let article = document.createElement('article');
   // article.setAttribute('id', result[i].name);

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
    // let arr = result[i]
    // image.setAttribute('alt', result[i].ingredientsDetail);
  
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
renderResults();

// console.log(typeof article);
