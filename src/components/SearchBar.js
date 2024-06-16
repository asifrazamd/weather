import React, { useState } from 'react';

const SearchBar = () => {
  const [location, setLocation] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    const response = await fetch('(https://api.openweathermap.org/data/2.5/weather)');
    const data = await response.json();
    console.log(data);
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Enter location"
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
