import axios from 'axios';
const API_KEY = '717f2d53d9680f1f476717ef5524e267';
const URL = '(https://api.openweathermap.org/data/2.5/weather)';
async function fetchWeather(location) {
  try {
    const response = await axios.get(`${URL}?q=${location}&units=metric&appid=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
export default fetchWeather;
