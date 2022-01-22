class UI {
    constructor() {
        this.currentWeatherContainer = document.querySelector('.current-weather-container');
        this.todaysWeatherContainer = document.querySelector('.todays-weather-container');
        this.otherCitiesWeather = document.querySelector('.other-cities-weather');
    }

    displayCurrent (weather) {

        const capDesc = this.capitalize(weather);

        const output = 
        `
            <header>
                <h1 class="city-name">${weather.name} as of Today</h1>
            </header>
            <div class="weather-info">
                <h1 class="temp">${weather.main.temp}&deg;</h1>
                <h1 class="forecast">${capDesc.slice(0, -1)}</h1>
                <h1 class="minmaxTemp" >max: ${weather.main.temp_min}&deg; -  min: ${weather.main.temp_max}&deg;</h1>
            </div>
            <img class="icon-img" src="http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png">
        `;

        this.currentWeatherContainer.innerHTML = output;
    }

    displayCity (weather) {
        const capDesc = this.capitalize(weather);

        const output = 
        `
            <header>
                <h1 class="name">${weather.name}</h1>
                <img class="img" src="http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png">
            </header>
            <div class="weather-info">
                <h1 class="current-temp">${weather.main.temp}&deg;</h1>
            </div>
        `;

        const cityWeather = document.createElement('div');
        cityWeather.className = 'city-weather';
        cityWeather.innerHTML = output;

        document.querySelector('.other-cities-weather').appendChild(cityWeather);

    }

    capitalize(weather) {
        let description = weather.weather[0].description;
        let arrDescription = description.split(' ');
        let capitalizedWords = arrDescription.map(word => {
            let firstLetter = word.charAt(0).toUpperCase();
            let cutWord = word.slice(1);
            return firstLetter + cutWord;
        });

        console.log(capitalizedWords)

        let capDesc = '';

        capitalizedWords.forEach(word => {
            capDesc += word + " ";            
        });

        return capDesc;
    }
}