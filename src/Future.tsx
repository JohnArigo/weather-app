import { useState } from "react";
import { SelectedDateType } from "./App";
import { WeatherConfigurationRoot } from "./WeatherConfig";
import wind from "./images/wind.png";
import humidity from "./images/humidity.png";

export type WeatherConfiguration = {
  weather?: WeatherConfigurationRoot;
  selectedDate?: SelectedDateType;
};

export default function Future({
  weather,
  selectedDate,
}: WeatherConfiguration) {
  const miliDate = selectedDate?.dateSelected.getTime();

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
    <main className="w-screen h-screen">
      <div role="container" className="flex flex-col">
        {filterWeatherData()?.map((data) => {
          return (
            <body className="w-96 h-44 flex flex-row flex-wrap self-center justify-between rounded-xl shadow-md">
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
                    <img src={humidity} className="w-3 h-3" />
                  </div>
                  <div className="ml-2 flex flex-row items-center">
                    {Math.round(data.wind.speed)}
                    <img src={wind} className="w-3 h-3" />
                  </div>
                </section>
              </main>
              <main className="w-1/3">Background image here</main>
            </body>
          );
        })}
      </div>
    </main>
  );
}
