import React from "react";
import styles from "./index.module.css";

const Title = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <p>
          <span>NOW</span>
          <span>APPROVED</span>
        </p>
      </div>
    </div>
  );
};

export default Title;
