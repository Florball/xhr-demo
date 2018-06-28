const searchForm = document.getElementById("search-form");
const searchField = document.getElementById("search-keyword");
const responseContainer = document.getElementById("response-container");
let searchForText;

searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  responseContainer.innerHTML = '';
  searchForText = searchField.value;
  getNews();
});

let getNews = () => {
  articleRequest = new XMLHttpRequest();
  articleRequest.open('GET', `http://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchForText}&api-key=e037d3d007ec4af9903ea619c6deb851`);
  articleRequest.onload = addNews;
  articleRequest.onerror = handleError;
  articleRequest.send();
}

let handleError = () => {
  console.log('Ocurrio un error');
}

let addNews = () => {
  const data = JSON.parse(articleRequest.responseText);
  console.log(data);

}