import { API_KEY } from "../constants/constants";

export const getUrl = (location) => {
  return `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`;
};
