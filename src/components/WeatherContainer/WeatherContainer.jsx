import React from "react";
import { Search } from "lucide-react";

const WeatherContainer = () => {
  return (
    <div className="bg-blue-800 text-white max-w-[95%] sm:max-w-150 mx-auto px-3 py-10 rounded-2xl">
      <div className="flex items-center justify-center gap-2">
        <input
          className="bg-white rounded-full text-gray-500 py-2 px-5"
          type="text"
          placeholder="Search"
        />
        <div>
          <Search size={30} className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default WeatherContainer;
