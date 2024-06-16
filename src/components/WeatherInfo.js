import React from 'react';

const WeatherInfo = ({ weather }) => {
  return (
    <div>
      <p>Humidity: {weather.humidity}%</p>
      <p>Wind speed: {weather.wind.speed} m/s</p>
      <p>Clouds: {weather.clouds.name}</p>
      <p>Pressure: {weather.pressure} hPa</p>
    </div>
  );
};

export default WeatherInfo;
