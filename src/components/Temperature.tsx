import React from 'react'

import TempCity from './TempCity';
import TempHumidity from './TempHumidity';
import { weatherType } from '../App';
import TempWind from './TempWind';

interface TemperatureProps {
  weather: weatherType | null;
}

function Temperature({ weather }: TemperatureProps) {
  return (
    <div className="weather">

      <TempCity weather={weather} />
      <div className="details">
      <TempHumidity weather={weather} />
      <TempWind weather={weather} />
      </div>

    </div>
  )
}

export default Temperature