import React, { useState } from "react";
import styles from "./index.module.css";
import icon from "../../assets/interactive icons/icn_pi_default.svg";
import iconClicked from "../../assets/interactive icons/icn_pi_down.svg";
import iconHover from "../../assets/interactive icons/icn_pi_hover.svg";

const DarkButton = () => {
  const [hover, setHover] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleHover = () => {
    setHover(true);
  };

  const handleHoverOut = () => {
    setHover(false);
    setClicked(false);
  };

  const handleClick = () => {
    setClicked(true);
  };

  return (
    <div className={styles.container}>
      <a href="/test.txt" download>
        <div
          className={hover ? styles["button-hover"] : styles.button}
          onMouseEnter={handleHover}
          onMouseLeave={handleHoverOut}
          onClick={handleClick}
        >
          <img
            src={hover ? (clicked ? iconClicked : iconHover) : icon}
            className={styles.icon}
          ></img>
          <span className={hover ? styles["text-hover"] : styles.text}>
            SEE PRESCRIBING INFORMATION
          </span>
        </div>
      </a>
    </div>
  );
};

export default DarkButton;
