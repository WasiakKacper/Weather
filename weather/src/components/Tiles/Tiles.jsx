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
  const [image, setImage] = useState("/Images/sunny.png");

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
            setImage("/Images/cloudy.png");
            break;
          case "Mist":
            setImage("/Images/mist.png");
            break;
          case "Rain":
            setImage("/Images/rain.png");
            break;
          case "Drizzle":
            setImage("/Images/rain.png");
            break;
          case "Snow":
            setImage("/Images/snowy.png");
            break;
          case "Clear":
            setImage("/Images/sunny.png");
            break;
          case "Few Clouds":
            setImage("/Images/partly cloudy.png");
            break;
          case "Storm":
            setImage("/Images/Storm.png");
            break;
        }
      });
  }, []);

  //RENDER WEATHER INFO ON NAME CHANGE
  const [cityNameFalse, setCityNameFalse] = useState(true);

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?&units=metric&q=${name}&appid=f896c2a1c7c45a7bc7ed8f976fb80b59`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.cod != "404" && data.cod != "400") {
          setTemp(Math.round(data.main.temp));
          setWindSpeed(Math.round(data.wind.speed));
          setPressure(Math.round(data.main.pressure));
          setCityNameFalse(true);

          switch (data.weather[0].main) {
            case "Clouds":
              setImage("/Images/cloudy.png");
              break;
            case "Mist":
              setImage("/Images/mist.png");
              break;
            case "Rain":
              setImage("/Images/rain.png");
              break;
            case "Drizzle":
              setImage("/Images/rain.png");
              break;
            case "Snow":
              setImage("/Images/snowy.png");
              break;
            case "Clear":
              setImage("/Images/sunny.png");
              break;
            case "Few Clouds":
              setImage("/Images/partly cloudy.png");
              break;
            case "Storm":
              setImage("/Images/Storm.png");
              break;
          }
        } else {
          setCityNameFalse(false);
        }
      });
  }, [name]);

  //RENDER INFO FOR REST OF TILES
  const [londonTemp, setLondonTemp] = useState("--°C");
  const [berlinTemp, setBerlinTemp] = useState("--°C");
  const [parisTemp, setParisTemp] = useState("--°C");

  const [londonIcon, setLondonIcon] = useState("/Images/sunny.png");
  const [berilIcon, setBerlinIcon] = useState("/Images/sunny.png");
  const [parisIcon, setParisIcon] = useState("/Images/sunny.png");

  const dictionary = {
    key01: londonTemp,
    key11: londonIcon,
    key02: berlinTemp,
    key22: berilIcon,
    key03: parisTemp,
    key33: parisIcon,
  };

  useEffect(() => {
    const cities = ["London", "Berlin", "Paris"];

    cities.forEach((city) => {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?&units=metric&q=${city}&appid=f896c2a1c7c45a7bc7ed8f976fb80b59`
      )
        .then((response) => response.json())
        .then((data) => {
          if (city == "London") {
            setLondonTemp(
              (dictionary.key1 =
                JSON.stringify(Math.round(data.main.temp)) + "°C")
            );
            switch (data.weather[0].main) {
              case "Clouds":
                setLondonIcon("/Images/cloudy.png");
                break;
              case "Mist":
                setLondonIcon("/Images/mist.png");
                break;
              case "Rain":
                setLondonIcon("/Images/rain.png");
                break;
              case "Drizzle":
                setLondonIcon("/Images/rain.png");
                break;
              case "Snow":
                setLondonIcon("/Images/snowy.png");
                break;
              case "Clear":
                setLondonIcon("/Images/sunny.png");
                break;
              case "Few Clouds":
                setLondonIcon("/Images/partly cloudy.png");
                break;
              case "Storm":
                setLondonIcon(() => ["/Images/Storm.png"]);
                break;
            }
          } else if (city == "Berlin") {
            setBerlinTemp(
              (dictionary.key2 =
                JSON.stringify(Math.round(data.main.temp)) + "°C")
            );
            switch (data.weather[0].main) {
              case "Clouds":
                setBerlinIcon("/Images/cloudy.png");
                break;
              case "Mist":
                setBerlinIcon("/Images/mist.png");
                break;
              case "Rain":
                setBerlinIcon("/Images/rain.png");
                break;
              case "Drizzle":
                setBerlinIcon("/Images/rain.png");
                break;
              case "Snow":
                setBerlinIcon("/Images/snowy.png");
                break;
              case "Clear":
                setBerlinIcon("/Images/sunny.png");
                break;
              case "Few Clouds":
                setBerlinIcon("/Images/partly cloudy.png");
                break;
              case "Storm":
                setBerlinIcon("/Images/Storm.png");
                break;
            }
          } else if (city == "Paris") {
            setParisTemp(
              (dictionary.key3 =
                JSON.stringify(Math.round(data.main.temp)) + "°C")
            );
            switch (data.weather[0].main) {
              case "Clouds":
                setParisIcon("/Images/cloudy.png");
                break;
              case "Mist":
                setParisIcon("/Images/mist.png");
                break;
              case "Rain":
                setParisIcon("/Images/rain.png");
                break;
              case "Drizzle":
                setParisIcon("/Images/rain.png");
                break;
              case "Snow":
                setParisIcon("/Images/snowy.png");
                break;
              case "Clear":
                setParisIcon("/Images/sunny.png");
                break;
              case "Few Clouds":
                setParisIcon("/Images/partly cloudy.png");
                break;
              case "Storm":
                setParisIcon("/Images/Storm.png");
                break;
            }
          }
        });
    });
    console.log(dictionary);
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

        {cityNameFalse ? (
          <div className="cityExists">
            <div className="wrapper">
              <div className="textWrapper">
                <h1>{name}</h1>
                <h3>{temp + "°C"}</h3>
              </div>
              <img src={image} alt="" />
            </div>
            <div className="pWrapper">
              <p>Wind speed: {windSpeed}km/h</p>
              <p>Pressure: {pressure}hPa</p>
            </div>
          </div>
        ) : (
          <div className="cityNotExists">
            Oops, the city name was incorrect. Please try again.
          </div>
        )}
      </div>
      <div className="right">
        <h2>Weather in the world: </h2>
        <Tile
          city="London"
          temperature={dictionary.key01}
          icon={dictionary.key11}
        />
        <Tile
          city="Berlin"
          temperature={dictionary.key02}
          icon={dictionary.key22}
        />
        <Tile
          city="Paris"
          temperature={dictionary.key03}
          icon={dictionary.key33}
        />
      </div>
    </section>
  );
};

export default Tiles;
