import React from "react";

import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { WeatherConfigurationRoot } from "./WeatherConfig";
import { forecast, current, nav } from "./routes";
import Navbar from "./Navbar";
import Future from "./Future";
import Current from "./Current";
import { RootConfig } from "./CurrenWeatherConfig";

export type SelectedDateType = {
  dateSelected: Date;
  currentDateCheck: boolean;
};

function App() {
  const dated = new Date();
  const dateOne = dated.setDate(dated.getDate() + 1);
  const initialDate = new Date(dateOne);

  const [selectedDate, setSelectedDate] = useState<SelectedDateType>({
    dateSelected: initialDate,
    currentDateCheck: false,
  });
  const [zipcode, setZipcode] = useState<number>(96706);
  const [weather, setWeather] = useState<WeatherConfigurationRoot>();
  const [currentWeather, setCurrentWeather] = useState<RootConfig>();

  useEffect(() => {
    if (selectedDate.currentDateCheck)
      fetch(
        `https://api.openweathermap.org/data/2.5/forecast?zip=${zipcode},US&appid=2236f63a213497e7540ce550e394c5c0&units=imperial`
      )
        .then((res) => res.json())
        .then((data) => setWeather(data));
  }, [selectedDate]);

  useEffect(() => {
    if (zipcode.toString().length === 5)
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?zip=${zipcode},US&appid=2236f63a213497e7540ce550e394c5c0&units=imperial`
      )
        .then((res) => res.json())
        .then((data) => setCurrentWeather(data));
  }, [zipcode]);

  return (
    <div className="App">
      <Navbar
        zipcode={zipcode}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        setZipcode={setZipcode}
      />

      <Routes>
        <Route
          path={forecast}
          element={<Future weather={weather} selectedDate={selectedDate} />}
        />
        <Route
          path={current}
          element={
            <Current
              currentWeather={currentWeather}
              selectedDate={selectedDate}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
