import React from "react";
import styles from "./index.module.css";
import logo from "../../assets/site-logo-ajovy.png";

const Logo = () => {
  return (
    <div className={styles.container}>
      <img src={logo} className={styles.logo}></img>
    </div>
  );
};

export default Logo;
