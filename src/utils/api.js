const API_KEY = 'YOUR_API_KEY';
const BASE_URL = '(link unavailable)';

const getWeatherByLocation = async (location) => {
  const response = await fetch(`${BASE_URL}/weather?q=${location}&appid=${API_KEY}`);
  const data = await response.json();
  return data;
};

const getWeatherByCoordinates = async (lat, lon) => {
  const response = await fetch(`${BASE_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`);
  const data = await response.json();
  return data;
};

export { getWeatherByLocation, getWeatherByCoordinates };




