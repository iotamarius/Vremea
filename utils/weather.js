// Imi definesc o functie care sa imi returneze iconita de la openWweather  pe baza codului primit de la API

function getWeatherIcon (iconCode){
    return `https://openweathermap.org/img/wn/${iconCode}.png`;
}

// Primim viteza vantului in m/s is noi vrem sa ii convertim in km/h
function windToKmPerHour(meterPerSec){
    return (meterPerSec * 3600) / 1000;

}