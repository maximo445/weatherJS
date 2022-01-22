class Weather {
    constructor() {
        this.key = 'e355210a830f5502dfb40f9ce8dc0db8';
        this.stringy = `api.openweathermap.org/data/2.5/weather?q=london&appid=e355210a830f5502dfb40f9ce8dc0db8`
    }

    async get (city = 'London', state = 'fl') {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.key}`;
        const req = new Request(url, {
            method: 'GET',
            mode: 'cors'
        });
        const response = await fetch(req);
        if (response.ok) {
            const weather = await response.json();
            return weather;
        } else {
            throw new Error('Error in response')
        }
    }
}