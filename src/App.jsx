import { useState } from "react";
import Header from "./components/Header/Header";
import Input from "./components/Input/Input";
import Weather from "./components/Weather/Weather";
import axios from "axios";
import Error from "./components/Error/Error";
import Loader from "./components/Loader/Loader";
import weatherTypes from "./assets/weather-types";

function App() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showWeatherImage, setShowWeatherImage] = useState([]);

  const validData = Object.keys(data).length > 0;
  console.log(validData);

  // function handling input location data
  function handlePlaceWeather(input) {
    setLoading(true);
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=5b02b9cfcdef67b06852af6ee113ff11`
      )
      .then((response) => {
        setData(response.data);
        console.log(response.data);
        setShowWeatherImage(
          weatherTypes.filter((weather) => {
            return weather.type === response.data.weather[0].main;
          })
        );
      })
      .catch((e) => {
        setError(e);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  // function handling current location data
  function handleLocatioWeather(lat, lon) {
    setLoading(true);
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=5b02b9cfcdef67b06852af6ee113ff11`
      )
      .then((response) => {
        setData(response.data);
        setShowWeatherImage(
          weatherTypes.filter((weather) => {
            return weather.type === response.data.weather[0].main;
          })
        );
      })
      .catch((e) => {
        setError(e);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  // function handling back button
  function handleBack() {
    if (validData) {
      setData({});
    }
    if (error) {
      setError("");
    }
  }

  return (
    <>
      <div className="container">
        <div class="card">
          <Header data={validData} err={error} handleBackKey={handleBack} />
          {!validData && !error && !loading && (
            <Input
              inputHandler={handlePlaceWeather}
              locationHandler={handleLocatioWeather}
            />
          )}
          {validData && !error && !loading && (
            <Weather data={data} images={showWeatherImage} />
          )}
          {error && !validData && <Error />}
          {loading && <Loader />}
        </div>
      </div>
    </>
  );
}

export default App;
