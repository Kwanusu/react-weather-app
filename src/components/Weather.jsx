import React from 'react';

function Weather({ data }) {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 text-center max-w-sm w-full">
      <h2 className="text-2xl font-bold text-blue-800 mb-2">{data.name}</h2>
      
      <img
        src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
        alt="weather icon"
        className="mx-auto mb-2"
      />

      <p className="text-lg text-gray-700">🌡️ Temp: {data.main.temp} °C</p>
      <p className="text-lg text-gray-700">💧 Humidity: {data.main.humidity}%</p>
      <p className="text-lg text-gray-700">💨 Wind: {data.wind.speed} m/s</p>
      <p className="text-lg capitalize text-gray-700">☁️ Condition: {data.weather[0].description}</p>
    </div>
  );
}

export default Weather;
