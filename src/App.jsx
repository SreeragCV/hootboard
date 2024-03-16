import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Input from "./components/Input/Input";
import Weather from "./components/Weather/Weather";

function App() {

  const [data, setData] = useState({})
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");


  function handlePlaceWeather(input){
    axios
        .get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=5b02b9cfcdef67b06852af6ee113ff11`)
        .then((response) => {
          setData(response.data);
          console.log(response.data);
          // setShowWeatherImage(
          //   weatherTypes.filter((weather) => {
          //     return weather.type === response.data.weather[0].main;
          //   })
          // );
          setLoading(false);
        })
        .catch((e) => {
          setError(e);
          setLoading(false);
        });
      setLocation("");
      setError();
  }

  function handleLocatioWeather(){

  }


  return (
    <>
      <div className="container">
        <div class="card">
          <Header/>
          <Input inputHandler={handlePlaceWeather} locationHandler={handleLocatioWeather}/>
          {/* <Weather/> */}
        </div>
      </div>
    </>
  );
}

export default App;
