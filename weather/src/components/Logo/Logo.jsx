import "./Logo.css";
import logo from "/Logo.png";
import { useState } from "react";

const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const Logo = () => {
  let [isActive, setIsActive] = useState(false);

  const moveLogo = async () => {
    await sleep(600);
    setIsActive(true);
  };
  moveLogo();

  return (
    <img
      id="logoElement"
      className={isActive ? "active" : "inActive"}
      src={logo}
    />
  );
};

export default Logo;
