import "../../App.css";
import "../home/Home.css";
import "./RoutePage.css";
import React from "react";

const RoutePage = ({ title, description, img, alt }) => {
  return (
    <div className="route-page">
      <div className="route-header">
        <div className="text">
          <p className="first-heading">Give Someone</p>
          <p className="second-heading">a bit of summer</p>
        </div>
        <img className="header-pic" src={img} alt={alt}></img>
      </div>
      <div className="body-container">
        <p className="title">{title}</p>
        <p className="description">{description}</p>
      </div>
    </div>
  );
};

export default RoutePage;
