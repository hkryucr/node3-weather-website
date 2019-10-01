const request = require('request');



const forecast = (lat, lon, callback) => {
    const url = "https://api.darksky.net/forecast/d0a283b41310d8bb83fe1496ad71cbd8/" + lat + "," + lon + "?lang=en";

    request({ url, json: true}, (error, { body }) => {
        if (error){
            callback('Unable to connect to weather service', undefined);
        } else if (body.error){
            callback('Unable to find location. Try another search', undefined)
        } else {
            console.log(body.daily.data[0])

            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature +' degrees out. This high today is ' + body.daily.data[0].temperatureHigh + ' with a low of ' + body.daily.data[0].temperatureLow + '. There is a ' + body.currently.precipProbability + 'chance of rain.'
            )
        }
    })
}

module.exports = forecast;