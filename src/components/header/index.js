import React from "react";
import styles from "./index.module.css";

const Header = () => {
  return (
    <div className={styles.container}>
      <a
        href="https://github.com/vnatovskigg"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.button}
      >
        Prescribing Information
      </a>
    </div>
  );
};

export default Header;
