const weather = new Weather();
const ui = new UI();
const myStorage = new Storage();
const searchInput = document.querySelector('#search-input');

const cityName = myStorage.getCityName();

if (cityName) {
    weather.get(cityName).then(res => {    
        ui.displayCurrent(res)    
    })
    .catch(err => console.log(err));
}


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

function displayC () {

}
