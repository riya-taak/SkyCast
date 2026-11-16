
import { useState } from "react";
import "./style.css";
import SearchInput from "./components/SearchInput";
import Temperature from "./components/Temperature";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export type weatherType = {
  temp: string,
  name: string,
  condition: string,
  humidity: string,
  wind: string
}

export default function App() {
  const [city, setCity] = useState<string>("");
  const [weather, setWeather] = useState<weatherType | null>(null);

  const fetchWeather = async () => {
    if (!city.trim()) return;

    try {
      const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&units=metric&appid=${API_KEY}`
      );
      const data = await res.json();

      if (!res.ok) {
        alert(data.message === "city not found" ? "City not found!" : data.message);
        return;
      }

      setWeather({
        temp: data.main.temp.toFixed(2) + "°C",
        name: data.name,
        condition: data.weather[0].description,
        humidity: data.main.humidity + "%",
        wind: (data.wind.speed * 3.6).toFixed(1) + " km/h", // m/s → km/h
      });
    } catch (error) {
      console.info("Problem : " + error);
    }
  };

  return (
    <section id="container">
      <div className="cart">
        <h1>SkyCast</h1>
        <SearchInput city={city} setCity={setCity} fetchWeather={fetchWeather} />
        <Temperature weather={weather} />
      </div>
    </section>
  );
}