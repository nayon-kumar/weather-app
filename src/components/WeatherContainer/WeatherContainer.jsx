import React, { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import Weather from "../Weather/Weather";
import axios from "axios";

const WeatherContainer = () => {
  const [weatherData, setWeatherData] = useState(null);

  const featchWeather = async (city = "Dhaka") => {
    try {
      const res = await axios.get(`https://goweather.xyz/weather/${city}`);
      setWeatherData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-blue-800 text-white max-w-[95%] sm:max-w-150 mx-auto px-5 sm:px-10 py-10 sm:py-20 rounded-2xl">
      <SearchBar featchWeather={featchWeather} />
      <Weather weatherData={weatherData} />
    </div>
  );
};

export default WeatherContainer;
