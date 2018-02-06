import axios from 'axios';

function handleError(error) {
  console.warn(error);
  return null;
}

async function getWeatherData(location) {
  try {
    const { data: { results } } = await axios.get(
      `https://api.opencagedata.com/geocode/v1/json?q=${location}&key=50a0ea95055e4f0ab5f85b5e3ef9fa00`
    );

    const { components: { city, state }, geometry: { lat, lng } } = results[0];
    const locData = {
      city: city,
      state: state,
      lat: lat,
      lng: lng
    };

    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&APPID=224b7da19b9e9c30983d4c504b9c491e`
    );

    const { main: { temp } } = data;
    const { description } = data.weather[0];
    locData['temp'] = convertToFahrenheit(temp);
    locData['description'] = capitalizeFirstLetter(description);

    return locData;
  } catch (error) {
    handleError(error);
    return null;
  }
}

function convertToFahrenheit(temp) {
  return (1.8 * (temp - 273) + 32) | 0;
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default {
  getWeatherData
};
