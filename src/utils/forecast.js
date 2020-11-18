const request = require('request')

const forecast = (longitude, latitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=25195363d7e818a0e7da82fe2733c900&query=' + encodeURIComponent(longitude) + ',' + encodeURIComponent(latitude) +'&units=f'
    request({ url , json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect', undefined)
        } else if (body.error) {
            callback('Wrong coordinates', undefined)
        } else {
            callback(undefined, {
                weather: body.current.weather_descriptions[0],
                temperature: body.current.temperature,
                feels: body.current.feelslike
            })
        }
    })

}

module.exports = forecast

