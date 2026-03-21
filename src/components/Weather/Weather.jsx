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
      </div>
      <div className="flex items-center justify-between mt-8">
        <div className="flex gap-3 items-center">
          <div>
            <img className="w-6" src={humidity} alt="humidity" />
          </div>
          <div>
            <h4>Humidity</h4>
            <h3>91%</h3>
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <div>
            <img className="w-6" src={wind} alt="wind" />
          </div>
          <div>
            <div>
              <h4>Wind Spreed</h4>
              <h3>3.6 Km/h</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
