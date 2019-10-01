const request = require('request');

const forecast = (lat, lon, callback) => {
    const url = "https://api.darksky.net/forecast/d0a283b41310d8bb83fe1496ad71cbd8/" + lat + "," + lon + "?lang=ko";

    request({ url, json: true}, (error, { body }) => {
        if (error){
            callback('Unable to connect to weather service', undefined);
        } else if (body.error){
            callback('Unable to find location. Try another search', undefined)
        } else {
            callback(undefined, {
                currentWeather: body.currently.summary
            })
        }
    })
}

module.exports = forecast;