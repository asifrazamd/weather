import React, { useState, useEffect } from 'react';
import fetchWeather from './weather';

function WeatherComponent() {
  const [location, setLocation] = useState('');
  const [weather, setWeather] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    fetchWeather(location).then(data => setWeather(data));
  }, [location]);

  const handleSearch = (e) => {
    setLocation(e.target.value);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const addLocation = () => {
    setLocations([...locations, location]);
    setLocation('');
  };

  return (
    <div className={`weather-component ${darkMode ? 'dark-mode' : ''}`}>
      <h1>Weather App</h1>
      <input
        type="search"
        value={location}
        onChange={handleSearch}
        placeholder="Enter location"
      />
      <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
      <button onClick={addLocation}>Add Location</button>
      {locations.map((location, index) => (
        <div key={index}>
          <h2>{location}</h2>
          {weather && (
            <div>
              <p>Temperature: {weather.main.temp}°C</p>
              <p>Humidity: {weather.main.humidity}%</p>
              <p>Wind Speed: {weather.wind.speed} m/s</p>
              <p>Weather Description: {weather.weather[0].description}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default WeatherComponent;

