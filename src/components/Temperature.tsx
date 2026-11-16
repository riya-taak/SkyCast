import React from 'react'
import humidity from "../assets/humidity.png";
import rain from "../assets/rain.jpeg";
import wind from "../assets/wind.png";
import { weatherType } from '../App';

interface TempertorProps {
  weather: weatherType | null;
}

function Temperature({ weather }: TempertorProps) {
  return (
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
  )
}

export default Temperature