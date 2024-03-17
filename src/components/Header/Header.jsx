import React from "react";
import classes from "./Header.module.css";

function Header({ data, err, handleBackKey }) {
  function handleClick() {
    handleBackKey();
  }

  return (
    <div className={classes.container}>
      {(err || data) && (
        <i
          onClick={handleClick}
          className="fa fa-arrow-left"
          style={{ fontSize: "14px" }}
        ></i>
      )}
      <span>Weather App</span>
    </div>
  );
}

export default Header;
