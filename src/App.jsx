import React from "react";
// import axios from "axios";
import "./index.js";
import InfoRow from "./components/InfoRow";
import SearchBar from "./components/SearchBar";

const apiKey = "41f68e3c835e2516f4e4e44a2aa530b2";

class App extends React.Component {
  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    wind: undefined,
    sunrise: undefined,
    sunset: undefined,
    description: undefined,
    error: undefined,
  };

  gettingWeather = async (event) => {
    event.preventDefault();
    const city = event.target.elements.city.value;
    const apiUrl = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );
    const data = await apiUrl.json();
    console.log(data);

    this.setState({
      temp: data.main.temp,
      city: data.name,
      country: data.sys.country,
      humidity: data.main.humidity,
      wind: data.wind.speed,
      sunrise: data.sys.sunrise,
      sunset: data.sys.sunset,
      description: data.clouds.all,
      error: "",
    });
  };

  render() {
    return (
      <div className="container flex align-center justify-center">
        <div className="weather-block flex flex-col">
          <SearchBar weatherMethod={this.gettingWeather} />
          <InfoRow label="City" value={this.state.city} />
          <InfoRow label="Country" value={this.state.country} />
          <InfoRow label="Temperature" value={this.state.temp} />
          <InfoRow label="Humidity" value={this.state.humidity} />
          <InfoRow label="Wind" value={this.state.wind} />
          <InfoRow label="Sunrise" value={this.state.sunrise} />
          <InfoRow label="Sunset" value={this.state.sunset} />
          <InfoRow label="Description" value={this.state.description} />
        </div>
      </div>
    );
  }
}

export default App;
