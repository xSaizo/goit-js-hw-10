import SlimSelect from 'slim-select'
import Notiflix from 'notiflix';
import axios from "axios";
axios.defaults.headers.common["x-api-key"] = "live_dEvtzSoIb6rp0feoC1AibhNDzSbnFzbrplshCgUwcdFSZ8dcaYhn50TWE4O5NDFv";

const breedSelect = document.querySelector(".breed-select");
const loader = document.querySelector(".loader");
const error = document.querySelector(".error");
const catInfo = document.querySelector(".cat-info");


async function fetchBreeds() {
  try {
    const response = await axios.get("https://api.thecatapi.com/v1/breeds");
    const breeds = response.data;

    breeds.forEach((breed) => {
      const option = document.createElement("option");
      option.value = breed.id;
      option.text = breed.name;
      breedSelect.appendChild(option);
    });
  } catch (error) {
    showError();
  }
}

async function fetchCatByBreed(breedId) {
  try {
    const response = await axios.get(
      `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`
    );
    const cat = response.data[0];
   

    catInfo.innerHTML = `<img src="${cat.url}" alt="${cat.breeds[0].name} width="200" height="350">
    <div><h3>${cat.breeds[0].name}</h3>
    <p>${cat.breeds[0].description}</p></div>`;

    hideLoader();
  } catch (error) {
    showError();
  }
}

function showLoader() {
  
  loader.style.display = "block";
  breedSelect.style.display = "none";
  catInfo.style.display = "none";
  error.style.display = "none";
}

function hideLoader() {
  loader.style.display = "none";
  breedSelect.style.display = "block";
  catInfo.style.display = "flex";
  error.style.display = "none";
 
}

function showError() {
  Notiflix.Report.info(
    'Oops!',
    'Something went wrong!',
    'Try reloading the page!',
    function cb() {
      location.reload()
    },
  );
  loader.style.display = "none";
  breedSelect.style.display = "none";
  catInfo.style.display = "none";
  error.style.display = "block";
}

breedSelect.addEventListener("change", () => {
  showLoader();
  const selectedBreedId = breedSelect.value;
  fetchCatByBreed(selectedBreedId);
});

fetchBreeds();

document.addEventListener("DOMContentLoaded", () => {
    fetchBreeds();
    hideLoader(); 
  });
  
 