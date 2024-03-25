const bucharestButton = document.querySelector(".dropdown-menu li .bucharest");
const timisoaraButton = document.querySelector(".dropdown-menu li .timisoara");
const oradeaButton = document.querySelector(".dropdown-menu li .oradea");
const aradButton = document.querySelector(".dropdown-menu li .arad");
const sibiuButton = document.querySelector(".dropdown-menu li .sibiu");

// declaram o functie care sa ne schimbe orasul curent
function updateCurrentCity(city) {
    // mai intai trebuie sa selectez elementul care imi tine orasul curent
    const currentCityElem = document.querySelector('.current-city');
    currentCityElem.innerHTML = city;
}

// declaram o functie care ne va schimba orasul si ne va face update la vreme

function updateWeather(city) {
    // Actulizam orasul selectat in dropdown in localStorage
    localStorage.setItem('city', city);
  // reafisam vremea curenta in functie de orasul selectat
  displayCurrentWeather(city);
  displayWeatherForecast (city);

  // actualizam orasul afisat pe ecran - aici o sa ne ajutam de o alta functie creata mai sus
  updateCurrentCity(city);
}

// Adaugam event listner pe fiecare element in parte - adica pe fiecare buton din drop-down

bucharestButton.addEventListener("click", () => {
  // La click pe butonul Bucuresti ar trebui sa schimb in numele orasului
  // Al doilea lucru este se fac update la vreme
  updateWeather('București');

});

timisoaraButton.addEventListener("click", () => {
  updateWeather('Timișoara');
});

oradeaButton.addEventListener("click", () => {
  updateWeather('Oradea');
});

aradButton.addEventListener("click", () => {
  updateWeather('Arad');
});

sibiuButton.addEventListener("click", () => {
  updateWeather('Sibiu');
});

