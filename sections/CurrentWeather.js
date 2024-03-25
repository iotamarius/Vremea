// Declaram functia care imi va afisa vremea curenta - apelul ei se face in index.js

function displayCurrentWeather(cityName) {
  // Ne luam link-ul catre care trebuie sa facem request-ul
  const currentWeatherEndpoint = getCurrentWeatherEndpoint(cityName);

  // Facem request-ul catre server
  fetch(currentWeatherEndpoint)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      // Extragem proprietatile de care avem nevoie din raspuns
      // data destructuring
      const { name, dt, main, weather, wind } = data;
      // vom lua ziua din saptamana . pentru asta ne folosim de proprietatea dt - ca sa facem asta vom crea un util de date
      const day = getDayOfTheWeek(dt);
      // O sa luam ora tot din proprietatea dt
      const hours = getHour(dt);

      // Extragem temperatura din obiect
      const temperature = Math.round(main.temp);
      const realFeel = Math.round(main.feels_like);

      // Extragem de pe weather
      const description = weather[0].description;
      // ne extragem iconita corespunzatoare vremii
      const weatherIcon = getWeatherIcon(weather[0].icon);
      // Calculam viteza vantului
      const windSpeedInKm = Math.round(windToKmPerHour(wind.speed));
        
     // console.log(name, day, hours, temperature, realFeel, description, weatherIcon, windSpeedInKm)
    
    const descriptionElement = document.querySelector('.current-weather');
    descriptionElement.innerHTML = `
      <div class="px-3">
        <div class="fs-2 mb-2"><strong>${name}</strong></div>
        <div class="fs-4"><strong>${day}</strong>, ${hours}</div>
        <div class="d-flex align-items-center justify-content-center">
          <strong class="fs-1">${temperature}°C</strong>
          <img src="${weatherIcon}" />
        </div>
      </div>
      <div class="px-3">
        <p class="fs-5"> Real feel: <strong>${realFeel}°C</strong></p>
        <p class="fs-5">${description}</p>
        <p class="fs-5">Vant: <strong>${windSpeedInKm} km/h</strong></p>
      </div>
    `;
  });

}
