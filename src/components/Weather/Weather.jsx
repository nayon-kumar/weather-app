import React from "react";
import clear from "../../assets/Weather/clear.png";

const Weather = ({ weatherData }) => {
  return (
    <div className="mt-5">
      <div className="flex flex-col items-center">
        <img className="mx-auto h-30 sm:h-40" src={clear} alt="" />
        <p>{weatherData?.description}</p>
      </div>
      <div className="text-center mt-3">
        <h1 className="text-3xl sm:text-4xl font-bold">
          {weatherData?.temperature}
        </h1>
        <h3 className="text-2xl sm:text-2.5xl mt-2 font-semibold">London</h3>
        <p className="mt-2">Wind Spreed: {weatherData?.wind}</p>
      </div>
      <h3 className="text-center my-5 text-2xl font-bold">Forecasts</h3>
      <div className="grid grid-cols-3 items-center justify-between gap-3">
        {weatherData?.forecast.map((data, index) => {
          return (
            <div
              key={data.day}
              className="bg-[#f39c12] p-2 rounded-md text-center"
            >
              <h3>Day {data.day}</h3>
              <h1 className="text-xl font-bold">{data.temperature}</h1>
              <h3 className="font-bold">{data.wind}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Weather;
