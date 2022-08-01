import React from "react";
import "./Services.css";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";
import moduleName from "../../";
import Resume from "./resume.pdf";

const Services = () => {
  return (
    <div className="services">
      {/* left side */}
      <div className="awesome">
        <span>My Awesome</span>
        <span>servises</span>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id eos qui
          <br />
          minima repellat possimus! Accusamus assumenda{" "}
        </span>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>

        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right side */}
      <div className="cards">
        <div style={{ left: "14rem" }}>
          <Card
            emoji={HeartEmoji}
            heading={"Design"}
            detail={"Figma, Sketch, Photoshop, Adobe xd"}
          />
        </div>
        {/* second card */}
        <div style={{ top: "12rem", left: "-4rem" }}>
          <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={"Html, Css, JavaScript, React"}
          />
        </div>
        {/* 3 card */}
        <div style={{ top: "19rem", left: "12rem" }}>
          <Card
            emoji={Humble}
            heading={"UI/UX"}
            detail={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id eos qui minima repellat possimus!"
            }
          />
        </div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
