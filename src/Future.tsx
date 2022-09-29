import { useState } from "react";
import { SelectedDateType } from "./App";
import { WeatherConfigurationRoot } from "./WeatherConfig";
import wind from "./images/wind.png";
import humidity from "./images/humidity.png";
import { FutureWeatherBackground } from "./FutureWeatherBackground";
import { FindWeatherIcon } from "./FindWeatherImage";

export type WeatherConfiguration = {
  weather?: WeatherConfigurationRoot;
  selectedDate?: SelectedDateType;
};

export default function Future({
  weather,
  selectedDate,
}: WeatherConfiguration) {
  const miliDate = selectedDate?.dateSelected.getTime();
  const dawn = new Date(weather?.city.sunrise! * 1000);
  const sunset = new Date(weather?.city.sunset! * 1000);

  const filterWeatherData = () => {
    return weather?.list?.filter((data) => {
      const currentDate = new Date(miliDate!);

      const dataDate = new Date(data.dt * 1000);
      const datePlusThreeHour = new Date(miliDate! + 10800000);

      if (currentDate <= dataDate && datePlusThreeHour > dataDate) {
        return data;
      }
    });
  };

  return (
    <main className="w-screen h-screen text-gray-50">
      <div role="container" className="flex flex-col">
        {filterWeatherData()?.map((data) => {
          const weatherDescription = data.weather[0].id;
          const DateSelected = selectedDate!.dateSelected;
          return (
            <body
              className={FutureWeatherBackground({
                DateSelected,
                weatherDescription,
                dawn,
                sunset,
              })}
            >
              <main className="flex flex-row justify-between ml-1 w-7/12 h-full items-end ">
                <section className="mb-5 flex flex-col">
                  <div>{data.weather[0].description}</div>
                  <div className="text-4xl mt-1">
                    {Math.round(data.main.temp)} F
                  </div>
                </section>
                <section className="flex flex-row mb-5">
                  <div className="flex flex-row items-center">
                    {Math.round(data.main.humidity)}
                    <img src={humidity} className="w-3 h-3 ml-1" />
                  </div>
                  <div className="ml-2 flex flex-row items-center">
                    {Math.round(data.wind.speed)}
                    <img src={wind} className="w-3 h-3 ml-1" />
                  </div>
                </section>
              </main>
              <main className="w-1/3 flex flex-row justify-end items-start">
                <img
                  className="h-24 w-24"
                  src={FindWeatherIcon({ DateSelected, weatherDescription })}
                />
              </main>
            </body>
          );
        })}
      </div>
    </main>
  );
}
