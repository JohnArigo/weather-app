import { useEffect, useState } from "react";
import { SelectedDateType } from "./App";
import { RootConfig } from "./CurrenWeatherConfig";
import humidity from "./images/humidity.png";
import wind from "./images/wind.png";
import { WeatherBackground } from "./WeatherBackground";
import { FindWeatherIcon } from "./FindWeatherImage";

export type WeatherConfiguration = {
  currentWeather?: RootConfig;
  selectedDate?: SelectedDateType;
};

export default function Current({
  currentWeather,
  selectedDate,
}: WeatherConfiguration) {
  // <h1 className="">{currentWeather?.name}</h1>
  const weatherDescription = currentWeather?.weather[0].id;
  const DateSelected = new Date();
  return (
    <body role="container" className=" flex flex-col text-gray-50">
      <body className={WeatherBackground({ DateSelected, weatherDescription })}>
        <main className="flex flex-row justify-between ml-1 w-7/12 h-full items-end ">
          <section className="flex flex-col mt-4">
            <div className="flex flex-col">
              <div className="text-sm">
                {currentWeather?.weather[0].description}
              </div>
              <div className="text-4xl mt-1">
                {Math.round(currentWeather?.main.temp!)}F
              </div>
            </div>
            <div className="flex flex-row text-xs mt-3 mb-3">
              <div>L: {Math.round(currentWeather?.main.temp_min!)}F</div>
              <div className="ml-2">
                H: {Math.round(currentWeather?.main.temp_max!)}F
              </div>
            </div>
          </section>
          <section className="flex flex-row h-full items-end mb-3">
            <div className="mr-3  flex flex-row items-center">
              <div className="mr-1">
                {Math.round(currentWeather?.main.humidity!)}
              </div>
              <div>
                <img src={humidity} className="w-3 h-3" />
              </div>
            </div>
            <div className="flex flex-row items-center">
              <div className="mr-1">
                {Math.round(currentWeather?.wind.speed!)}
              </div>
              <div>
                <img src={wind} className="w-3 h-3" />
              </div>
            </div>
          </section>
        </main>
        <section className="w-1/3 h-full flex flex-row justify-end">
          <img
            className="w-24 h-24"
            src={FindWeatherIcon({ DateSelected, weatherDescription })}
          />
        </section>
      </body>
    </body>
  );
}
