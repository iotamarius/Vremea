// Declar functia care imi va afisa vremea pe urmatoarele 5 zile , iar apelul functiei se va face din index.js

function displayWeatherForecast (city) {
    // Prima data ne generam link-ul API catre care vom face requestului
    const forecastWeatherEndpoint = getForecastWeatherEndpoint(city);

    // Imi selectez elementul cu clasa .weather-forecast deoarece aici am sa inserez HTM L-ul generat in pasul cu fetch
    const weatherForecastContainer = document.querySelector('.weather-forecast');
    // Inainte de a face callul catre server (adica inainte de fetch) am sa golesc containerul de weatherForcastContainer
    weatherForecastContainer.innerHTML='';


    // Facem requestul catre server
    fetch(forecastWeatherEndpoint)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);

            // facem un object destructuring pe data pentru a accesa proprietatea list 
            const { list } = data;
            console.log(list);

            // Ne declaram un obiect gol in care o sa tinem predictiile pe zile (luni, marti, miercuri etc.)
            const daysMap = {};

            // iteram prin cele 40 de predictii primite de la server, adica prin fiecare element al array-ului list
            list.forEach((element) => {
                // extragem proprietatea dt din fiecare element al array-ului
                const { dt } = element;
                const day = getDayOfTheWeek(dt);
                // Daca avem deja ziua saptamanii in obiectul daysMap ii adaugam o noua predictie, adica ii adaugam element
                if (daysMap[day]){
                    daysMap[day].push(element);
                }
                // Altfel daca nu avem ziua saptamanii in obiectul daysMap, o sa adaugam ziua respectiva impreuna cu element-ul (sau predictia)
                else{
                  daysMap[day] = [element]; 
                }
            });
            console.log(daysMap);
            // iteram prin obiectul daysMap care are deja datele grupate pe zile folosind instructiunea for...in - adica fiecare cheie din obiect reprezinta o zi a saptamanii
            
            for(dayKey in daysMap){
                // Inserez in HTML ziua din obiectul daysMap
                weatherForecastContainer.innerHTML += `<h3 class="text-primary">${dayKey}</h3>`;
                // Imi extrag elementul curent din obiectul daysMap
                let weatherByDays = daysMap[dayKey];

                weatherByDays.forEach((element) => {
                    // pentru fiecare element sau predictie pot sa ma apuc sa extrag datele de interes
                    const {dt, main, weather} = element;
                    // Procesez ora
                    const hour = getHour(dt);
                    // Rotunjim temperatura
                    const temperature = Math.round(main.temp);
                    const realFeel = Math.round(main.feels_like);

                    // Atentie la descriere - deoarece weather este un array cu un singur element -> accesam mereu elem 0
                    const description = weather[0].description;
                    const weatherIcon = getWeatherIcon(weather[0].icon);

                    // Inseram datele HTML cu toate datele de mai sus
                    weatherForecastContainer.innerHTML += `
                        <div class="weather-forecast-box d-flex justify-content-between align-items-center w-100 border rounded mb-3 p-3">
                            <div>${hour}</div>
                            <div><img src="${weatherIcon}" /></div>
                            <div class="fs-3"><strong>${temperature}°C</strong></div>
                            <div>${description}</div>
                            <div class="real-feel">Real feel: <strong>${realFeel}°C</strong></div>
                        </div>
                    `;

                })
            }
        })

}

