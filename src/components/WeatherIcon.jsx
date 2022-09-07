import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/pro-light-svg-icons";
import { faClouds } from "@fortawesome/pro-light-svg-icons";
import { faCloudBolt } from "@fortawesome/pro-light-svg-icons";
import { faCloudDrizzle } from "@fortawesome/pro-light-svg-icons";
import { faCloudRain } from "@fortawesome/pro-light-svg-icons";
import { faCloudSnow } from "@fortawesome/pro-light-svg-icons";
import { faCloudFog } from "@fortawesome/pro-light-svg-icons";
import { faSmoke } from "@fortawesome/pro-light-svg-icons";
import { faSmog } from "@fortawesome/pro-light-svg-icons";
import { faSunDust } from "@fortawesome/pro-light-svg-icons";
import { faVolcano } from "@fortawesome/pro-light-svg-icons";
import { faWindWarning } from "@fortawesome/pro-light-svg-icons";
import { faCloudShowersHeavy } from "@fortawesome/pro-light-svg-icons";
import { faTornado } from "@fortawesome/pro-light-svg-icons";

export const WeatherIcon = ({ weatherDescription }) => {
  if (weatherDescription === "Clear") {
    return <FontAwesomeIcon icon={faSun} />;
  }

  if (weatherDescription === "Clouds") {
    return <FontAwesomeIcon icon={faClouds} />;
  }

  if (weatherDescription === "Thunderstorm") {
    return <FontAwesomeIcon icon={faCloudBolt} />;
  }

  if (weatherDescription === "Drizzle") {
    return <FontAwesomeIcon icon={faCloudDrizzle} />;
  }

  if (weatherDescription === "Rain") {
    return <FontAwesomeIcon icon={faCloudRain} />;
  }

  if (weatherDescription === "Snow") {
    return <FontAwesomeIcon icon={faCloudSnow} />;
  }

  if (weatherDescription === "Rain") {
    return <FontAwesomeIcon icon={faCloudRain} />;
  }

  if (weatherDescription === "Mist" || weatherDescription === "Fog") {
    return <FontAwesomeIcon icon={faCloudFog} />;
  }

  if (weatherDescription === "Smoke") {
    return <FontAwesomeIcon icon={faSmoke} />;
  }

  if (weatherDescription === "Haze") {
    return <FontAwesomeIcon icon={faSmog} />;
  }

  if (weatherDescription === "Dust") {
    return <FontAwesomeIcon icon={faSunDust} />;
  }

  if (weatherDescription === "Ash") {
    return <FontAwesomeIcon icon={faVolcano} />;
  }

  if (weatherDescription === "Sand") {
    return <FontAwesomeIcon icon={faWindWarning} />;
  }

  if (weatherDescription === "Squall") {
    return <FontAwesomeIcon icon={faCloudShowersHeavy} />;
  }

  if (weatherDescription === "Tornado") {
    return <FontAwesomeIcon icon={faTornado} />;
  }
};
