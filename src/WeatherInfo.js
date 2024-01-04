import React from "react";
import FormattedDate from "./FormattedDate.js";

export default function WeatherInfo (props) {
    return(
    <div className="WeatherInfo">
        <h1>{props.data.city}</h1>
          <ul>
            <li>
                <FormattedDate date={props.data.date} />
            </li>
            <li className="text-capitalize">{props.data.description}</li>
          </ul>
          <div className="row">
            <div className="col-6 mt-3">
              <div className="clearfix">
                <img
                  src={props.data.iconUrl}
                  alt="Partly cloudy"
                  className="float-left mb-5"
                />
                <span className="temperature">{Math.round(props.data.temperature)}</span>
                <span className="unit">&deg;C</span>
              </div>
            </div>
            <div className="col-6 mt-4">
              <ul>
                <li>Precipitation: 0%</li>
                <li>Humidity: {props.data.humidity}%</li>
                <li>Wind: {props.data.wind} mph</li>
              </ul>
            </div>
          </div>
    </div>
    );
}