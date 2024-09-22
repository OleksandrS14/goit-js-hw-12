import { fetchImages } from "./js/pixabay-api";

const form = document.querySelector('.form');
form.addEventListener('submit', onFormSearch);
async function onFormSearch(event){
  event.preventDefault();
  const query = event.target.elements.state.value.trim();
  console.log(query);
}