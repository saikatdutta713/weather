import React from "react";

const generateTimes = () => {
  const times = [];
  for (let i = 0; i < 24; i++) {
    const hour = i === 0 ? 12 : i > 12 ? i - 12 : i; // Convert hour to 12-hour format
    const period = i < 12 ? "AM" : "PM"; // Determine AM or PM
    times.push(`${hour}:00 ${period}`); // Add the time string to the array
  }
  return times;
};

function Content() {
  const times = generateTimes();

  return (
    <div className=" w-8/12 p-2 mx-auto flex flex-col rounded-xl">
      {/* Search bar */}
      <div className=" w-auto my-auto bg-orange-200 flex justify-center rounded-xl overflow-hidden">
        <input
          type="text"
          placeholder="Search city..."
          className="border w-full border-gray-300 py-2 px-3 focus:outline-none "
        ></input>
        <button className="px-3 py-2 bg-slate-400 text-white font-semibold">
          Search
        </button>
      </div>

      {/* Temperature details with Image */}
      <div className="h-2/6 my-auto flex">
        {/* Present temperature of city */}
        <div className="h-full w-1/2 px-4">
          <h1 className=" text-3xl p-2 font-semibold">Kolkata</h1>
          <p className=" text-lg px-2">Chance of rain: 10%</p>
          <h1 className=" text-5xl px-2 py-4 font-bold">31°</h1>
        </div>

        {/* Temperature icon */}
        <div className=" ml-auto py-4 px-8">
          <img
            className=" h-28"
            src="https://cdn.weatherapi.com/weather/64x64/day/176.png"
            alt="weather icon"
          />
        </div>
      </div>

      {/* Forcast details */}
      <div className=" h-1/5 my-auto rounded-xl bg-slate-400 px-2 ">
        <h1 className=" h-1/6 text-md font-semibold text-center">
          Today's forecast
        </h1>

        <div
          className=" h-5/6 py-2 px-3 w-full flex overflow-x-hidden hover:overflow-x-auto hover: overflow-y-hidden"
          style={{
            scrollbarWidth: "thin",
            scrollbarColor: "rgba(0, 0, 0, 0.5) rgba(0, 0, 0, 0.1)",
          }}
        >
          {times.map((time, index) => (
            <div key={index} className="text-center h-full">
              <div className=" max-h-5/6 px-5 w-max flex flex-col justify-center border-x border-slate-300">
                <p className="text-md text-slate-800">{time}</p>
                <img
                  className="h-8 mx-auto"
                  src="https://cdn.weatherapi.com/weather/64x64/day/176.png"
                  alt="weather icon"
                />
                <p className="font-bold text-lg">31°</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Forcast details */}
      <div className=" h-2/6 p-2 my-auto rounded-xl bg-slate-400">
        <h1 className=" h-1/6 text-xl font-semibold px-2 text-slate-800">
          Forecast details
        </h1>
        <div
          className="h-4/6 p-2 w-full justify-center grid gap-2"
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
          }}
        >
          <div className="h-full flex justify-center">
            <img
              className="h-6"
              src="https://cdn.weatherapi.com/weather/64x64/day/176.png"
              alt="weather icon"
            />
            <div className="max-h-full px-1">
              <p className="text-md text-slate-800">Wind</p>
              <p className="font-semibold text-2xl">5 km/h</p>
            </div>
          </div>

          <div className="h-full flex justify-center">
            <img
              className="h-6"
              src="https://cdn.weatherapi.com/weather/64x64/day/176.png"
              alt="weather icon"
            />
            <div className="max-h-full px-1">
              <p className="text-md text-slate-800">AQI</p>
              <p className="font-semibold text-2xl">365</p>
            </div>
          </div>

          <div className="h-full flex justify-center">
            <img
              className="h-6"
              src="https://cdn.weatherapi.com/weather/64x64/day/176.png"
              alt="weather icon"
            />
            <div className="max-h-full px-1">
              <p className="text-md text-slate-800">Wind pressure</p>
              <p className="font-semibold text-2xl">500mBar</p>
            </div>
          </div>

          <div className="h-full flex justify-center">
            <img
              className="h-6"
              src="https://cdn.weatherapi.com/weather/64x64/day/176.png"
              alt="weather icon"
            />
            <div className="max-h-full px-1">
              <p className="text-md text-slate-800">UV index</p>
              <p className="font-semibold text-2xl">2</p>
            </div>
          </div>

          <div className="h-full flex justify-center">
            <img
              className="h-6"
              src="https://cdn.weatherapi.com/weather/64x64/day/176.png"
              alt="weather icon"
            />
            <div className="max-h-full px-1">
              <p className="text-md text-slate-800">Humidity</p>
              <p className="font-semibold text-2xl">76%</p>
            </div>
          </div>

          <div className="h-full flex justify-center">
            <img
              className="h-6"
              src="https://cdn.weatherapi.com/weather/64x64/day/176.png"
              alt="weather icon"
            />
            <div className="max-h-full px-1">
              <p className="text-md text-slate-800">Sunrise</p>
              <p className="font-semibold text-2xl">6:15 am</p>
            </div>
          </div>

          <div className="h-full flex justify-center">
            <img
              className="h-6"
              src="https://cdn.weatherapi.com/weather/64x64/day/176.png"
              alt="weather icon"
            />
            <div className="max-h-full px-1">
              <p className="text-md text-slate-800">Sunset</p>
              <p className="font-semibold text-2xl">5:24 pm</p>
            </div>
          </div>
        </div>
        <button className=" bg-blue-400 rounded-md text-md font-semibold px-2 py-1 float-right text-white ">
          Read more
        </button>
      </div>
    </div>
  );
}

export default Content;
