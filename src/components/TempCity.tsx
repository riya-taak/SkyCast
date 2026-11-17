import React from 'react'
import rain from "../assets/rain.jpeg";
import { weatherType } from '../App';


interface TempCityProps{
    weather: weatherType | null;
}

function TempCity({weather}:TempCityProps) {
  return (
    <div>
        <img className="imgsize" src={rain} alt="weather" />

        <div>
          <h1 className="temp">{weather ? weather.temp : "---"}</h1>
          <h2 className="city">{weather ? weather.name : "---"}</h2>
          <p className="condition">
            <b>Condition : </b>
            {weather ? weather.condition : "---"}
          </p>
        </div>
      </div>
  )
}

export default TempCity