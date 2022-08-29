import React, { useState } from "react";
import axios from "axios";
import { SearchBar } from "./components/SearchBar";
import { TitleRow } from "./components/TitleRow";
import { InfoBlock } from "./components/InfoBlock";
import { getUrl } from "./utils/utils";
import weatherImg from "./img/weather.jpeg";

export const App = () => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const { weather = {}, name: city, main = {}, wind = {} } = data;

  const { temp, humidity } = main;
  const { main: description } = weather;
  const { speed } = wind;

  const apiUrl = getUrl(location);

  const handleInput = (event) => {
    event.preventDefault();

    axios.get(apiUrl).then((response) => {
      setData(response.data);
    });
  };

  const inputChange = (event) => setLocation(event.target.value);

  return (
    <div
      className="container flex align-center justify-center"
      style={{ background: `url(${weatherImg}) 50%/cover no-repeat` }}
    >
      <div className="weather-block">
        <div className="top flex flex-col">
          <TitleRow title="Weather" />
          <SearchBar
            value={location}
            onChange={inputChange}
            onSearch={handleInput}
          />
        </div>
        <div className="bottom">
          <div className="city">
            <h2>{city}</h2>
          </div>
          <div className="weather">
            <div className="weather__icon"></div>
            <div className="weather__data">
              <div className="weather__temp">
                <p>{temp}</p>
                <span>&#8451;</span>
              </div>
              <div className="weather__main">{description}</div>
            </div>
          </div>
          <div className="info-row flex">
            <InfoBlock label="Humidity" value={humidity} />
            <InfoBlock label="Wind" value={speed} />
          </div>
        </div>
      </div>
    </div>
  );
};
