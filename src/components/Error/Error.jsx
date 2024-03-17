import React from "react";
import classes from "./Error.module.css";

function Error() {
  return (
    <div>
      <div className={classes.container}>
        <div className={`${classes.cloud} ${classes.front}`}>
          <span className={classes.left_front}></span>
          <span className={classes.right_front}></span>
        </div>
        <span className={`${classes.sunshine} ${classes.sun}`}></span>
        <span className={classes.sun}></span>
        <div className={`${classes.cloud} ${classes.back}`}>
          <span className={classes.left_back}></span>
          <span className={classes.right_back}></span>
        </div>
      </div>
      <div className={classes.no_results}>
        <p>No results found..</p>
        <p>Please search again.</p>
      </div>
    </div>
  );
}

export default Error;
