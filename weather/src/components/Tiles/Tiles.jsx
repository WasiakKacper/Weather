import "./Tiles.css";
import { useState } from "react";
import PropTypes from "prop-types";

const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const Tile = (props) => {
  return (
    <div className="tile">
      <p>{props.city}</p>
      <p>{props.temperature}</p>
      <img src={props.icon} />
    </div>
  );
};

Tile.propTypes = {
  city: PropTypes.string,
  temperature: PropTypes.string,
  icon: PropTypes.string,
};

const Tiles = () => {
  let [isActive, setIsActive] = useState(false);
  let [show, setShow] = useState(false);

  const moveTiles = async () => {
    await sleep(1000);
    setIsActive(true);
  };
  moveTiles();

  return (
    <section className={isActive ? "active" : "inActive"}>
      <div className="left">
        <div className="search">
          <div className="searchWrapper">
            <h5>Write city name: </h5>
            <div className="inputWrapper">
              <input type="text" />
              <button>Search</button>
            </div>
          </div>
        </div>

        <div className="wrapper">
          <div className="textWrapper">
            <h1>Warsaw</h1>
            <h3>20°C</h3>
          </div>
          <img src="src/assets/Images/sunny.png" alt="" />
        </div>
        <div className="pWrapper">
          <p>Wind speed: 20km/h</p>
          <p>Fog: 0%</p>
        </div>
      </div>
      <div className="right">
        <h2>Weather in the world: </h2>
        <Tile
          city="London"
          temperature="20°C"
          icon="src/assets/Images/sunny.png"
        />
        <Tile
          city="Berlin"
          temperature="15°C"
          icon="src/assets/Images/cloudy.png"
        />
        <Tile
          city="Paris"
          temperature="10°C"
          icon="src/assets/Images/rain.png"
        />
      </div>
    </section>
  );
};

export default Tiles;
