const searchForm = document.getElementById("search-form");
const searchField = document.getElementById("search-keyword");
const responseContainer = document.getElementById("response-container");
let searchForText;
// const articleRequest=new XMLHttpRequest();

searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  responseContainer.innerHTML = '';
  searchForText = searchField.value;
  getNews();
});

getNews = () => {
  articleRequest = new XMLHttpRequest();
  articleRequest.open('GET', `http://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchForText}&api-key=35bc1c0b68d04bc784f7c78296e1b668`);
  articleRequest.onload = addNews;
  articleRequest.onerror = handleError;
  articleRequest.send();
}

handleError = () => {
  console.log('Ocurrio un error');
}

addNews = () => {
  const data = JSON.parse(articleRequest.responseText);
  console.log(data);

}