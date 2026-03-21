import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import Weather from "../Weather/Weather";

const WeatherContainer = () => {
  return (
    <div className="bg-blue-800 text-white max-w-[95%] sm:max-w-150 mx-auto px-3 py-10 rounded-2xl">
      <SearchBar />
      <Weather />
    </div>
  );
};

export default WeatherContainer;
