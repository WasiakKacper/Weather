import "./Logo.css";
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
      className={isActive ? "active" : "inActive"}
      src="src/assets/Logo.png"
      alt="Weather website logo"
    />
  );
};

export default Logo;
