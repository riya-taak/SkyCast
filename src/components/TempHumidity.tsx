import React from 'react'
import humidity from "../assets/humidity.png";
import { weatherType } from '../App';

interface TempHumidityprops {
    weather: weatherType | null;
}

function TempHumidity({ weather }: TempHumidityprops) {
    return (
        
            <div className="col">
                <img className="imgsize" src={humidity} alt="humidity" />
                <div>
                    <p className="humidity">{weather ? weather.humidity : "--"}</p>
                    <p>humidity</p>
                </div>
            </div>
    )
}

export default TempHumidity