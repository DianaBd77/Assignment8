import "../../App.css";
import "./Home.css";
import Card from "./Card";
import React from "react";
import sunflower from "./pic/sunflower.jpg";
import orchid from "./pic/orchid.jpg";
import cactus from "./pic/cactus.jpg";
import headerPic from "./pic/header.jpg";


const Home = () => {
  return (
    <div className="home">
      <div className="home-header">
        <div className="text">
          <h1>Give Someone</h1>
          <h2>a bit of summer</h2>
        </div>
        <img className="header-pic" src={headerPic} alt="coffee"></img>
      </div>
      <div className="card-container">
        <Card
          title={"SUNFLOWER"}
          description={
            "Helianthus is a genus comprising about 70 species of annual and perennial..."
          }
          img={sunflower}
        />
        <Card
          className="orchid"
          title={"ORCHID"}
          description={
            "Orchidaceae is a diverse and widespread family of flowering plants..."
          }
          img={orchid}
        />
        <Card
          title={"CACTUS"}
          description={
            "A cactus is a member of the plant family Cactaceae, a family comprising..."
          }
          img={cactus}
        />
      </div>
    </div>
  );
};

export default Home;
