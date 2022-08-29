import React, { useState } from "react";
import axios from "axios";
import { SearchBar } from "./components/SearchBar";
import { TitleRow } from "./components/TitleRow";
import { InfoBlock } from "./components/InfoBlock";
import { getUrl } from "./utils/utils";
import weatherImg from "./img/weatherImg.jpeg";
import dropletDegree from "./img/dropletDegree.png";
import windSpeed from "./img/windSpeed.png";

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

        {city !== undefined && (
          <div className="bottom flex flex-col gap-20">
            <div className="city">{city}</div>
            <div className="weather flex">
              <div className="weather__icon"></div>
              <div className="weather__data flex-col">
                <div className="weather__temp flex">
                  <p>{temp}</p>
                  <span>&#8451;</span>
                </div>
                <div className="weather__main flex">{description}</div>
              </div>
            </div>
            <div className="info-row flex gap-12">
              <InfoBlock
                icon={dropletDegree}
                label="Humidity"
                value={humidity}
                metric={"%"}
              />
              <InfoBlock
                icon={windSpeed}
                label="Wind"
                value={speed}
                metric={"m/s"}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
