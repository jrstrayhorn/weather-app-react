var axios = require('axios');

function handleError(error) {
  console.warn(error);
  return null;
}

function getWeatherData(location) {
  return axios
    .get(
      'https://api.opencagedata.com/geocode/v1/json?q=' +
        location +
        '&key=50a0ea95055e4f0ab5f85b5e3ef9fa00'
    )
    .then(function(res) {
      var locData = {
        city: res.data.results[0].components.city,
        state: res.data.results[0].components.state,
        lat: res.data.results[0].geometry.lat,
        lng: res.data.results[0].geometry.lng
      };

      return axios
        .get(
          'https://api.openweathermap.org/data/2.5/weather?' +
            'lat=' +
            locData.lat +
            '&lon=' +
            locData.lng +
            '&APPID=224b7da19b9e9c30983d4c504b9c491e'
        )
        .then(function(res) {
          locData['temp'] = convertToFahrenheit(res.data.main.temp);
          locData['description'] = capitalizeFirstLetter(
            res.data.weather[0].description
          );

          return locData;
        });
    })
    .catch(handleError);
}

function convertToFahrenheit(temp) {
  return (1.8 * (temp - 273) + 32) | 0;
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

module.exports = {
  getLocationData: getWeatherData
};
