import React, { useState } from "react";
import classes from "./Input.module.css";

function Input({ inputHandler, locationHandler }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const place = formData.get("place");
    inputHandler(place);
  }

  function handleLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        locationHandler(latitude, longitude);
      }, (e) => {
        console.log("request declined!");
      });
    }
  }

  return (
    <div className={classes.container}>
      <form onSubmit={handleSubmit} action="">
        <input autoFocus type="text" name="place" placeholder="Enter city name" />
      </form>
      <div className={classes.separator}>
        <div></div>
        <span>or</span>
        <div></div>
      </div>
      <div onClick={handleLocation} className={classes.buttonDiv}>
        <button>Get Device Location</button>
      </div>
    </div>
  );
}

export default Input;
