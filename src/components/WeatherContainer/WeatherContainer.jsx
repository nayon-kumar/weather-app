import React, { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import Weather from "../Weather/Weather";
import axios from "axios";

const WeatherContainer = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("");
  const [myCity, setMyCity] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const featchWeather = async (city = "Dhaka") => {
    try {
      setLoading(true);
      setError("");
      const res = await axios.get(`https://goweather.xyz/weather/${city}`);
      setWeatherData(res.data);
      setMyCity(city);
    } catch (error) {
      setWeatherData(null);
      setError(`${city} city is not found. Please try another city!`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-blue-800 text-white max-w-[95%] sm:max-w-150 mx-auto px-5 sm:px-10 py-10 sm:py-20 rounded-2xl">
      <SearchBar featchWeather={featchWeather} city={city} setCity={setCity} />
      <Weather weatherData={weatherData} myCity={myCity} loading={loading} />

      {error && <p className="text-red-300 text-center mt-4">{error}</p>}
    </div>
  );
};

export default WeatherContainer;
