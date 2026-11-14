
import { useState } from "react";
import "./style.css";
import humidity from "./assets/humidity.png";
import rain from "./assets/rain.jpeg";
import wind from "./assets/wind.png";
import search from "./assets/search.png"

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export default function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const fetchWeather = async () => {
    if (!city.trim()) return;

    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
          city
        )}&units=metric&appid=${API_KEY}`
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

        <div className="search">
          <input
            type="text"
            id="inputSearch"
            placeholder="Enter city name"
            spellCheck="false"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && fetchWeather()}
          />
          <button className="searchBtn" onClick={fetchWeather}>
           <img  id= "search" src={search} alt="search" />
          </button>
        </div>

        <div className="weather">
          <img className="imgsize" src={rain} alt="weather" />

          <div>
            <h1 className="temp">{weather ? weather.temp : "---"}</h1>
            <h2 className="city">{weather ? weather.name : "---"}</h2>
            <p className="condition">
              <b>Condition : </b>
              {weather ? weather.condition : "---"}
            </p>
          </div>

          <div className="details">
            <div className="col">
              <img className="imgsize" src={humidity} alt="humidity" />
              <div>
                <p className="humidity">{weather ? weather.humidity : "--"}</p>
                <p>humidity</p>
              </div>
            </div>

            <div className="col">
              <img className="imgsize" src={wind} alt="wind" />
              <div>
                <p className="wind">{weather ? weather.wind : "--"}</p>
                <p>wind speed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}