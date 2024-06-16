import React from 'react';
import WeatherCard from '../components/WeatherCard';
import WeatherInfo from '../components/WeatherInfo';

const WeatherContainer = ({ weather }) => {
  return (
    <div>
      <WeatherCard weather={weather} />
      <WeatherInfo weather={weather} />
    </div>
  );
};

export default WeatherContainer;
