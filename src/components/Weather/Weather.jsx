import classes from "./Weather.module.css";
import feelsImage from "../../assets/thermometer.png";
import humidityImg from "../../assets/weather.png";

function Weather({ data, images }) {

  return (
    <>
      {data && (
        <div className={classes.container}>
          <img src={images ? images[0].img : null} alt="" />
          <h1>{data.main.temp.toFixed()}°C</h1>
          <h3>{data.weather[0].main}</h3>
          <h3 className={classes.place}>
            {data.name}, {data.sys.country}
          </h3>
          <div className={classes.weather_stats}>
            <div className={classes.feelslike}>
              <div className={classes.imgDiv}>
                <img src={feelsImage} alt="" />
              </div>
              <div className={classes.center}>
                <h4>{data.main.feels_like.toFixed()}°C</h4>
                <p>Feels like</p>
              </div>
            </div>
            <div className={classes.humidity}>
              <div className={classes.imgDiv}>
                <img src={humidityImg} alt="" />
              </div>
              <div className={classes.center}>
                <h4>{data.main.humidity}%</h4>
                <p>Humidity</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Weather;
