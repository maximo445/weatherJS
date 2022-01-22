const weather = new Weather();
const ui = new UI();
const myStorage = new Storage();
const searchInput = document.querySelector('#search-input');

const cities = ['New York', 'Palo Alto', 'Atlanta', 'San Francisco', 'Chicago'];

const cityName = myStorage.getCityName();

createCityWeather();

if (cityName) {
    weather.get(cityName).then(res => {    
        ui.displayCurrent(res)    
    })
    .catch(err => console.log(err));
}

// setInterval(createCityWeather, 5000);

searchInput.addEventListener('keyup', e => {
    if(e.keyCode === 13) {
        weather.get(e.target.value).then(res => {
            if (res.cod === 200) {
                ui.displayCurrent(res);
                myStorage.setCityName(res.name);
            } else {
                throw new Error('Did not get data');
            }
        })
        .catch(err => console.log(err));
    }
});


function createCityWeather () {
    cities.forEach(city => {
        weather.get(city).then(res => {
            if (res.cod === 200) {
                ui.displayCity(res);
            } else {
                throw new Error('Did not get data');
            }
        })
        .catch(err => console.log(err));
    });
}
