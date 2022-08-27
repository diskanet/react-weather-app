import React, { useState } from "react";
import axios from "axios";

export const App = () => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const apiKey = "41f68e3c835e2516f4e4e44a2aa530b2";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(apiUrl).then((response) => {
        setData(response.data);
      });
    }
  };

  return (
    <div className="container flex align-center justify-center">
      <div className="weather-block">
        <div className="top flex flex-col">
          <div className="main-info flex align-end">
            <div className="degrees flex">
              {data.main ? <p> {data.main.temp}</p> : null}
              <span>&#8451;</span>
            </div>
            <div className="city">
              <p>{data.name}</p>
            </div>
            <div className="weather-icon"></div>
          </div>
          <div className="search-bar flex  ">
            <input
              className="input-style flex-1"
              value={location}
              onChange={(event) => setLocation(event.target.value)}
              onKeyPress={searchLocation}
              type="text"
              name="city"
              laceholder="Enter city..."
            />
          </div>
        </div>
        <div className="bottom">
          <div className="bottom__row flex">
            <div className="bottom__block flex flex-col flex-1 justify-center">
              <p className="label">Humidity</p>
              <p className="value">
                {data.main ? <p> {data.main.humidity}</p> : null}
              </p>
            </div>
            <div className="bottom__block flex flex-col flex-1 justify-center">
              <p className="label">Wind</p>
              <p className="value">75</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
