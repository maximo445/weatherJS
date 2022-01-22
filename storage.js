class Storage {
    setCityName (cityName = 'miami') {
        localStorage.setItem('cityName', JSON.stringify(cityName));
    }

    getCityName() {
      return JSON.parse( localStorage.getItem('cityName'));
    }
}