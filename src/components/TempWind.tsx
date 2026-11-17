import React from 'react'
import { weatherType } from '../App'
import wind from "../assets/wind.png";

interface TempWindProps{
    weather : weatherType | null;
}
function TempWind({weather}:TempWindProps) {
  return (
    <div>
          <div className="col">
            <img className="imgsize" src={wind} alt="wind" />
            <div>
              <p className="wind">{weather ? weather.wind : "--"}</p>
              <p>wind speed</p>
            </div>
          </div>
        </div>
  )
}

export default TempWind