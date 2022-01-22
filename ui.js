class UI {
    constructor() {
        this.currentWeatherContainer = document.querySelector('.current-weather-container');
        this.todaysWeatherContainer = document.querySelector('.todays-weather-container');
    }

    displayCurrent (weather) {
        const output = 
        `
            <header>
                <h1 class="city-name">${weather.name}</h1>
            </header>
            <div class="weather-info">
                <h1 class="temp">${weather.main.temp}</h1>
                <h1 class="forecast">${weather.weather[0].description}</h1>
                <h1 class="minmaxTemp" >Max: ${weather.main.temp_min} * Min: ${weather.main.temp_max}</h1>
            </div>
        `;

        this.currentWeatherContainer.innerHTML = output;
    }
}