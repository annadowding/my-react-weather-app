import React , { useState }from "react";
import WeatherInfo from "./WeatherInfo.js"
import axios from "axios";
import "./Weather.css";
import "./App.css";


export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ready:false});
  const [city, setCity]= useState (props.defaultCity);

  function handleResponse (response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      city: response.data.name,
      icon: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000),
    
    });
  }

  function search () {
     let apiKey = "d1b6ead1e59b61fc5c228b89a0df9361";
     let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
     axios.get(apiUrl).then(handleResponse);  
  }

  function handleSubmit (event) {
    event.preventDefault();
    search();
  }

  function handleCityChange (event) {
    setCity(event.target.value);
  }
  
if (weatherData.ready) {
    return (
    <div className="Weather">
      <form className="form" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
              onChange = {handleCityChange}
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <WeatherInfo data={weatherData}/>
    </div>
  );
} else {
    search ();
    return "Loading...";
}
  
}
