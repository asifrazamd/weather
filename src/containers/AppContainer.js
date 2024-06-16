import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import WeatherCard from '../components/WeatherCard';
import WeatherInfo from '../components/WeatherInfo';

const AppContainer = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [weather, setWeather] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    const query = e.target.value;
    setSearchQuery(query);
    fetchWeather(query);
  };

  const fetchWeather = async (query) => {
    console.log('Fetching weather for:', query);
    const response = await fetch('(https://api.openweathermap.org/data/2.5/weather?)');
    const data = await response.json();
    console.log('Weather data:', data);
    setWeather(data);
  };

  useEffect(() => {
    fetchWeather('Machilipatnam'); // Initial fetch with default city
  }, []);

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {weather && <WeatherCard weather={weather} />}
      {weather && <WeatherInfo weather={weather} />}
    </div>
  );
};

export default AppContainer;
