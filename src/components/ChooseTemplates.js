import React from "react";
import bdayblack from "./images/bdayblack.png";
import bdayred from "./images/bdayred.png";
import bdaywhite from "./images/bdaywhite.jpg";
import "./styles/Photo.css";
const ChooseTemplates = (props) => {
  return (
    <>
      <h2 className="temp"> Choose a Template: </h2>
      <div
        style={{
          backgroundImage: `url(${bdayblack})`,
          width: "70%",
          height: "30%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
      ></div>
      <button
        className="temp-btn1"
        onClick={() => {
          props.setIndex(0);
        }}
      >
        Template 1
      </button>
      <br />
      <br />
      <div
        style={{
          backgroundImage: `url(${bdayred})`,
          width: "70%",
          height: "30%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
      ></div>
      <button
        className="temp-btn1"
        onClick={() => {
          props.setIndex(1);
        }}
      >
        Template 2
      </button>
      <br />
      <br />
      <div
        style={{
          backgroundImage: `url(${bdaywhite})`,
          width: "70%",
          height: "30%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
      ></div>
      <button
        className="temp-btn1"
        onClick={() => {
          props.setIndex(2);
        }}
      >
        Template 3
      </button>
      <br />
    </>
  );
};

export default ChooseTemplates;
