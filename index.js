//Luam valoarea cheii city din local storage
let currentCityFromLS = localStorage.getItem("city");

// pasul urmator este sa actualizam orasul afisat pe ecran daca avem cheia "city" in  localStorage
const currentCityTag = document.querySelector(".current-city");
if (currentCityFromLS) {
  currentCityTag.innerHTML = currentCityFromLS;
}

if (!currentCityFromLS) {
  localStorage.setItem("city", "București");
}

// Afisam vremea curenta folosind o functie din alt fisier
displayCurrentWeather(currentCityFromLS);

// Afisam vremea pe urmatoarele 5 zile
displayWeatherForecast(currentCityFromLS);