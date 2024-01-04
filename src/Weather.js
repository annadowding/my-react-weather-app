import React , { useState }from "react";
import FormattedDate from "./FormattedDate";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ready:false});

  function handleResponse (response) {
    console.log(response.data);
    setWeatherData ({
        ready: true,
        temperature: response.data.main.temp,
        wind: response.data.wind.speed,
        humidity: response.data.main.humidity,
        description: response.data.weather[0].description,
        city: response.data.name,
        iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
        date: new Date (response.data.dt * 1000),
    });
  }

  
if (weatherData.ready) {
    return (
    <div className="Weather">
      <form className="form">
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <h1>{weatherData.city}</h1>
      <ul>
        <li>
            <FormattedDate date={weatherData.date} />
        </li>
        <li className="text-capitalize">{weatherData.description}</li>
      </ul>
      <div className="row">
        <div className="col-6 mt-3">
          <div className="clearfix">
            <img
              src={weatherData.iconUrl}
              alt="Partly cloudy"
              className="float-left mb-5"
            />
            <span className="temperature">{weatherData.temperature}</span>
            <span className="unit">&deg;C</span>
          </div>
        </div>

        <div className="col-6 mt-4">
          <ul>
            <li>Precipitation: 0%</li>
            <li>Humidity: {weatherData.humidity}%</li>
            <li>Wind: {weatherData.wind} mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
} else {
    let city = "London";
    let apiKey = "d1b6ead1e59b61fc5c228b89a0df9361";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);  

    return "Loading...";
}
  
}
