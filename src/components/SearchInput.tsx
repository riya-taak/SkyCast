import React, { Dispatch, SetStateAction } from 'react'
import search from "../assets/search.png"

interface SearchInputProps {
    city: string;
    setCity: Dispatch<SetStateAction<string>>;
    fetchWeather: () => void;
}

function SearchInput({ city, setCity, fetchWeather }: SearchInputProps) {
    return (
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
                <img id="search" src={search} alt="search" />
            </button>
        </div>
    )
}

export default SearchInput