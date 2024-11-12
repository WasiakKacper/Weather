import { useEffect, useState } from "react";
import "./Tiles.css";
import PropTypes from "prop-types";

//ANIMATION
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

  const moveTiles = async () => {
    await sleep(1000);
    setIsActive(true);
  };
  moveTiles();

  //WRITE NAME ON MAIN TILE
  const [value, setValue] = useState("");
  const [name, setName] = useState("WARSAW");

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = () => {
    setName(value.toUpperCase(value));
    setValue("");
  };

  //RENDER WEATHER INFO AFTER FIRST LOAD
  const [temp, setTemp] = useState("--°C");
  const [windSpeed, setWindSpeed] = useState("--km/h");
  const [pressure, setPressure] = useState("----hPa");
  const [image, setImage] = useState("src/assets/Images/sunny.png");

  useEffect(() => {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=Warsaw&appid=f896c2a1c7c45a7bc7ed8f976fb80b59"
    )
      .then((response) => response.json())
      .then((data) => {
        setTemp(Math.round(data.main.temp));
        setWindSpeed(Math.round(data.wind.speed));
        setPressure(Math.round(data.main.pressure));

        switch (data.weather[0].main) {
          case "Clouds":
            setImage("src/assets/Images/cloudy.png");
            break;
          case "Mist":
            setImage("src/assets/Images/mist.png");
            break;
          case "Rain":
            setImage("src/assets/Images/rain.png");
            break;
          case "Drizzle":
            setImage("src/assets/Images/rain.png");
            break;
          case "Snow":
            setImage("src/assets/Images/snowy.png");
            break;
          case "Clear":
            setImage("src/assets/Images/sunny.png");
            break;
          case "Few Clouds":
            setImage("src/assets/Images/partly cloudy.png");
            break;
          case "Storm":
            setImage("src/assets/Images/Storm.png");
            break;
        }
      });
  }, []);

  //RENDER WEATHER INFO ON NAME CHANGE
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?&units=metric&q=${name}&appid=f896c2a1c7c45a7bc7ed8f976fb80b59`
    )
      .then((response) => response.json())
      .then((data) => {
        setTemp(Math.round(data.main.temp));
        setWindSpeed(Math.round(data.wind.speed));
        setPressure(Math.round(data.main.pressure));

        switch (data.weather[0].main) {
          case "Clouds":
            setImage("src/assets/Images/cloudy.png");
            break;
          case "Mist":
            setImage("src/assets/Images/mist.png");
            break;
          case "Rain":
            setImage("src/assets/Images/rain.png");
            break;
          case "Drizzle":
            setImage("src/assets/Images/rain.png");
            break;
          case "Snow":
            setImage("src/assets/Images/snowy.png");
            break;
          case "Clear":
            setImage("src/assets/Images/sunny.png");
            break;
          case "Few Clouds":
            setImage("src/assets/Images/partly cloudy.png");
            break;
          case "Storm":
            setImage("src/assets/Images/Storm.png");
            break;
        }
      });
  }, [name]);

  //RENDER INFO FOR REST OF TILES
  const [londonTemp, setLondonTemp] = useState("--°C");
  const [berlinTemp, setBerlinTemp] = useState("--°C");
  const [parisTemp, setParisTemp] = useState("--°C");

  const [londonIcon, setLondonIcon] = useState("src/assets/Images/sunny.png");
  const [berlinIcon, setBerlinIcon] = useState("src/assets/Images/sunny.png");
  const [parisIcon, setParisIcon] = useState("src/assets/Images/sunny.png");

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?&units=metric&q=London&appid=f896c2a1c7c45a7bc7ed8f976fb80b59`
    )
      .then((response) => response.json())
      .then((data) => {
        setLondonTemp(Math.round(data.main.temp) + "°C");
        switch (data.weather[0].main) {
          case "Clouds":
            setLondonIcon("src/assets/Images/cloudy.png");
            break;
          case "Mist":
            setLondonIcon("src/assets/Images/mist.png");
            break;
          case "Rain":
            setLondonIcon("src/assets/Images/rain.png");
            break;
          case "Drizzle":
            setLondonIcon("src/assets/Images/rain.png");
            break;
          case "Snow":
            setLondonIcon("src/assets/Images/snowy.png");
            break;
          case "Clear":
            setLondonIcon("src/assets/Images/sunny.png");
            break;
          case "Few Clouds":
            setLondonIcon("src/assets/Images/partly cloudy.png");
            break;
          case "Storm":
            setLondonIcon("src/assets/Images/Storm.png");
            break;
        }
      });

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?&units=metric&q=Berlin&appid=f896c2a1c7c45a7bc7ed8f976fb80b59`
    )
      .then((response) => response.json())
      .then((data) => {
        setBerlinTemp(Math.round(data.main.temp) + "°C");
        switch (data.weather[0].main) {
          case "Clouds":
            setBerlinIcon("src/assets/Images/cloudy.png");
            break;
          case "Mist":
            setBerlinIcon("src/assets/Images/mist.png");
            break;
          case "Rain":
            setBerlinIcon("src/assets/Images/rain.png");
            break;
          case "Drizzle":
            setBerlinIcon("src/assets/Images/rain.png");
            break;
          case "Snow":
            setBerlinIcon("src/assets/Images/snowy.png");
            break;
          case "Clear":
            setBerlinIcon("src/assets/Images/sunny.png");
            break;
          case "Few Clouds":
            setBerlinIcon("src/assets/Images/partly cloudy.png");
            break;
          case "Storm":
            setBerlinIcon("src/assets/Images/Storm.png");
            break;
        }
      });

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?&units=metric&q=Paris&appid=f896c2a1c7c45a7bc7ed8f976fb80b59`
    )
      .then((response) => response.json())
      .then((data) => {
        setParisTemp(Math.round(data.main.temp) + "°C");
        switch (data.weather[0].main) {
          case "Clouds":
            setParisIcon("src/assets/Images/cloudy.png");
            break;
          case "Mist":
            setParisIcon("src/assets/Images/mist.png");
            break;
          case "Rain":
            setParisIcon("src/assets/Images/rain.png");
            break;
          case "Drizzle":
            setParisIcon("src/assets/Images/rain.png");
            break;
          case "Snow":
            setParisIcon("src/assets/Images/snowy.png");
            break;
          case "Clear":
            setParisIcon("src/assets/Images/sunny.png");
            break;
          case "Few Clouds":
            setParisIcon("src/assets/Images/partly cloudy.png");
            break;
          case "Storm":
            setParisIcon("src/assets/Images/Storm.png");
            break;
        }
      });
  }, []);

  //JSX
  return (
    <section className={isActive ? "active" : "inActive"}>
      <div className="left">
        <div className="search">
          <div className="searchWrapper">
            <h5>Write city name: </h5>
            <div className="inputWrapper">
              <input
                type="text"
                className="inputElement"
                onChange={handleInputChange}
                value={value}
              />
              <button onClick={handleSubmit}>Search</button>
            </div>
          </div>
        </div>

        <div className="wrapper">
          <div className="textWrapper">
            <h1>{name}</h1>
            <h3>{temp}°C</h3>
          </div>
          <img src={image} alt="" />
        </div>
        <div className="pWrapper">
          <p>Wind speed: {windSpeed}km/h</p>
          <p>Pressure: {pressure}hPa</p>
        </div>
      </div>
      <div className="right">
        <h2>Weather in the world: </h2>
        <Tile city="London" temperature={londonTemp} icon={londonIcon} />
        <Tile city="Berlin" temperature={berlinTemp} icon={berlinIcon} />
        <Tile city="Paris" temperature={parisTemp} icon={parisIcon} />
      </div>
    </section>
  );
};

export default Tiles;
