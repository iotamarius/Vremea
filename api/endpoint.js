// de obicei informatia de API_KEY nu ar fi bine sa le stocam in format text in codul nostru, pnetur ca oricine ar putea sa le vada si sa le foloseasca. E bine ca ele sa stea pe server, dar in cazul nostru fiind un API gratuit, le vom stoca aici.
const API_KEY = 'd8e3d2c9cdd71724242a8bcaa08fadb8';

// Construim link-urile (endpoint-urile) catre care noi vom face requesturi cu JS

// functie care sa imi dea API pt locatia dorita
function getCurrentWeatherEndpoint(city){
    return `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ro&units=metric&appid=${API_KEY}`;
}

// Declaram a doua functie pe care o vom folosi pentru a lua URL-ul catre API-ul care ne returneaza date despre vremea pe 5 zile

function getForecastWeatherEndpoint(city){
    return `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=ro&units=metric&appid=${API_KEY}`;
}