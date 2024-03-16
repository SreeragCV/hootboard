import React from "react";
import classes from "./Weather.module.css";
import feelsImage from "../../assets/thermometer.png"
import humidityImg from "../../assets/weather.png"


function Weather() {
  return (
    <>
      <div className={classes.container}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/6974/6974833.png"
          alt=""
        />
        <h1>13°C</h1>
        <h3>Broken Clouds</h3>
        <h3 className={classes.place}>Kathmandu, Nepal</h3>
        <div className={classes.weather_stats}>
          <div className={classes.feelslike}>
            <div className={classes.imgDiv}>
              <img src={feelsImage} alt="" />
            </div>
            <div className={classes.center}>
              <h4>17°C</h4>
              <p>Feels like</p>
            </div>
          </div>
          <div className={classes.humidity}>
            <div className={classes.imgDiv}>
              <img src={humidityImg} alt="" />
            </div>
            <div className={classes.center}>
              <h4>49%</h4>
              <p>Humidity</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Weather;
