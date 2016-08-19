var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=f5895da59660649e390a8eb59335e194&units=metric';    //f5895da59660649e390a8eb59335e194

module.exports = {
    getTemp: function(location){
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
        console.log(requestUrl);
        return axios.get(requestUrl).then(function(resp){
            if(resp.data.cod && resp.data.message){
                throw new Error(resp.data.message);
            }else{
                return resp.data.main.temp;
            }
        }, function (resp){
            throw new Error(resp.data.message);
        });
    }
}
