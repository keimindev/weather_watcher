import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

export const CurrentWeather = () => {
  return (
    <>
      <div className="text-sm flex items-center justify-center p-2">
        <div className="mr-1">
          <FaMapMarkerAlt />
        </div>
        <div>Toronto</div>
      </div>
      <div className="mt-2"> Monday 1, May</div>
      <div className="mt-5 mb-5 w-[140px] bg-indigo-400 rounded-[20px] flex flex-col items-center justify-center p-3 shadow-lg">
        <div className="text-5xl">🌤️</div>
        <div className="text-4xl">22</div>
        <div className="text-xl">Cloudy</div>
      </div>
      <div className="w-[220px] flex items-center justify-around bg-gray-100 p-3 rounded-full">
        <div className="flex">
          <div>☔️</div>
          <div>30%</div>
        </div>
        <div className="flex">
          <div>💧</div>
          <div>30%</div>
        </div>
        <div className="flex">
          <div>💨</div>
          <div>30%</div>
        </div>
      </div>
    </>
  );
};
