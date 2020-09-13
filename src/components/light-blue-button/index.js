import React from "react";
import styles from "./index.module.css";
import icon from "../../assets/interactive icons/icn_pi_default.svg";

const LightButton = () => {
  return (
    <div className={styles.container}>
      <div className={styles.button}>
        <img src={icon} className={styles.icon}></img>
        <span className={styles.text}>SEE PRESCRIBING INFORMATION</span>
      </div>
    </div>
  );
};

export default LightButton;
