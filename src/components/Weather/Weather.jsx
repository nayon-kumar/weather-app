import React from "react";
import clear from "../../assets/Weather/clear.png";

const Weather = () => {
  return (
    <div className="mt-5">
      <div className="flex items-center justify-center">
        <img className="mx-auto h-30 sm:h-40" src={clear} alt="" />
      </div>
      <div className="text-center mt-3">
        <h1 className="text-3xl sm:text-5xl font-bold">30 °C</h1>
        <h3 className="text-2xl sm:text-3xl mt-2 font-semibold">London</h3>
      </div>
    </div>
  );
};

export default Weather;
