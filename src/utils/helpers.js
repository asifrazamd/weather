const formatTemperature = (temperature) => {
    return `${temperature}°C`;
  };
  
  const formatDateTime = (date) => {
    const dateTime = new Date(date);
    return dateTime.toLocaleDateString() + ' ' + dateTime.toLocaleTimeString();
  };
  
  export { formatTemperature, formatDateTime };
  