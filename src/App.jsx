import React, { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDropletDegree } from "@fortawesome/pro-light-svg-icons";
import { faWind } from "@fortawesome/pro-light-svg-icons";

import { SearchBar } from "./components/SearchBar";
import { TitleRow } from "./components/TitleRow";
import { InfoBlock } from "./components/InfoBlock";
import { WeatherIcon } from "./components/WeatherIcon";
import { getUrl } from "./utils/utils";
import ukraine from "./img/ukraine.jpeg";

export const App = () => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const { weather = [{}], name: city, main = {}, wind = {} } = data;

  const { temp, humidity } = main;
  const [{ main: description }] = weather;
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
      style={{ background: `url(${ukraine}) 50%/cover no-repeat` }}
    >
      <div className="weather-block">
        <div className="top flex flex-col">
          <TitleRow title="Weather" visibility={city} />
          <SearchBar
            value={location}
            onChange={inputChange}
            onSearch={handleInput}
          />
        </div>

        {!!city && (
          <div className={"bottom flex flex-col gap-20"}>
            <div className="city">{city}</div>
            <div className="weather gap-16 flex">
              <div className="weather__icon bounding-96">
                <WeatherIcon weatherDescription={description} />
              </div>
              <div className="weather__data flex-col">
                <div className="weather__temp flex">
                  <p>{temp.toFixed()}</p>
                  <span>&#8451;</span>
                </div>
                <div className="weather__main flex">{description}</div>
              </div>
            </div>
            <div className="info-row flex gap-12">
              <InfoBlock
                icon={<FontAwesomeIcon icon={faDropletDegree} />}
                label="Humidity"
                value={humidity}
                metric={"%"}
              />
              <InfoBlock
                icon={<FontAwesomeIcon icon={faWind} />}
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
