import "./Tiles.css";
import { useState } from "react";

const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const Tile = (props) => {
  return (
    <div className="tile">
      <h5>{props.city}</h5>
      <h5>{props.temperature}</h5>
      <img src={props.icon} />
    </div>
  );
};

const Tiles = () => {
  let [isActive, setIsActive] = useState(false);

  const moveLogo = async () => {
    await sleep(1000);
    setIsActive(true);
  };
  moveLogo();

  return (
    <section className={isActive ? "active" : "inActive"}>
      <div className="left">
        <div className="search">
          <div className="wrapper">
            <h5>Write city name: </h5>
            <div className="inputWrapper">
              <input type="text" />
              <button>Search</button>
            </div>
          </div>
        </div>
        {/*         <h2>Warsaw</h2>
        <div className="status">
          <p>--°C</p>
          <img src="src/assets/images/sunny.png" alt="" />
        </div> */}
      </div>
      <div className="right">
        <h2>Weather in the world: </h2>
        <Tile />
        <Tile />
        <Tile />
      </div>
    </section>
  );
};

export default Tiles;
