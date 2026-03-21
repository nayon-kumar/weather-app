import React from "react";
import clear from "../../assets/Weather/clear.png";
import humidity from "../../assets/Weather/humidity.png";
import wind from "../../assets/Weather/wind.png";

const Weather = () => {
  return (
    <div className="mt-5">
      <div className="flex flex-col items-center">
        <img className="mx-auto h-30 sm:h-40" src={clear} alt="" />
        <p>Clear</p>
      </div>
      <div className="text-center mt-3">
        <h1 className="text-3xl sm:text-4xl font-bold">30 °C</h1>
        <h3 className="text-2xl sm:text-2.5xl mt-2 font-semibold">London</h3>
        <p className="mt-2">Wind Spreed: 3.6 Km/h</p>
      </div>
      <h3 className="text-center my-5 text-2xl font-bold">Forecasts</h3>
      <div className="grid grid-cols-3 items-center justify-between gap-3">
        <div className="bg-[#f39c12] p-2 rounded-md text-center">
          <h3>Day 1</h3>
          <h1 className="text-xl font-bold">30 °C</h1>
          <h3 className="font-bold">14 km/h</h3>
        </div>
        <div className="bg-[#f39c12] p-2 rounded-md text-center">
          <h3>Day 1</h3>
          <h1 className="text-xl font-bold">30 °C</h1>
          <h3 className="font-bold">14 km/h</h3>
        </div>
        <div className="bg-[#f39c12] p-2 rounded-md text-center">
          <h3>Day 1</h3>
          <h1 className="text-xl font-bold">30 °C</h1>
          <h3 className="font-bold">14 km/h</h3>
        </div>
      </div>
    </div>
  );
};

export default Weather;
