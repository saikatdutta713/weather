import React from "react";

function LeftSidebar() {
  return (
    <div className=" w-max p-2 flex flex-col bg-slate-400 rounded-xl text-white text-sm">
      <div className="hover:bg-slate-700 p-2 rounded-xl w-max mx-auto ">
        Logo
      </div>
      <button className="mt-28 hover:bg-slate-700 rounded-lg p-1">
        <img
          className="h-10 mx-auto"
          src="https://cdn.weatherapi.com/weather/64x64/day/176.png"
          alt="Weather"
        />
        Weather
      </button>
      <button className="mt-5 hover:bg-slate-700 rounded-lg p-1">
        <img
          className="h-10 mx-auto"
          src="https://cdn.weatherapi.com/weather/64x64/day/176.png"
          alt="Weather"
        />
        Cities
      </button>
      <button className="my-5 hover:bg-slate-700 rounded-lg p-1">
        <img
          className="h-10 mx-auto"
          src="https://cdn.weatherapi.com/weather/64x64/day/176.png"
          alt="Weather"
        />
        Map
      </button>
      <button className="hover:bg-slate-700 rounded-lg p-1">
        <img
          className="h-10 mx-auto"
          src="https://cdn.weatherapi.com/weather/64x64/day/176.png"
          alt="Weather"
        />
        Settings
      </button>
    </div>
  );
}

export default LeftSidebar;
