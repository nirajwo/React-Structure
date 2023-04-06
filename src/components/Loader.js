import React from "react";
import "./style.css";

/* Loader */
const Loader = () => {
  return (
    <div className="spinner-container">
      <div className="loader-spinner">
        <div className="spinner-border text-light" />
      </div>
    </div>
  );
};

export default Loader;
