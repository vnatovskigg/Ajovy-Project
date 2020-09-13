import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./index.module.css";
import Recaptcha from "react-recaptcha";

const Form = () => {
  const [verified, setVerified] = useState(false);
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    if (verified) {
      alert("Success");
      console.log(data);
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.head}>
          <span>SIGN UP FOR UPDATES</span>
        </div>
        <div className={styles.errors}>
          {console.log(errors)}
          {errors.name && <span>Please fill the necessary inputs</span>}
        </div>
        <div className={styles.information}>
          <div className={styles.fname}>
            <label for="fname">FIRST*</label>
            <input
              type="text"
              name="firstName"
              id="fname"
              ref={register({ required: true, maxLength: 10 })}
            />
          </div>
          <div className={styles.lname}>
            <label for="lname">LAST*</label>
            <input
              type="text"
              name="lastName"
              id="lname"
              ref={register({ required: true, maxLength: 10 })}
            />
          </div>
        </div>
        <div className={styles.email}>
          <label for="email">EMAIL*</label>
          <input
            type="email"
            name="email"
            id="email"
            ref={register({ required: true })}
          />
        </div>

        <div className={styles.checks}>
          <div>
            <input
              type="checkbox"
              placeholder="Age Disclaimer"
              name="Age Disclaimer"
              ref={register({ required: true })}
            />
            <span>*I am 18 years of age or older</span>
          </div>
          <div>
            <input
              type="checkbox"
              placeholder="TOS Disclaimer"
              name="TOS Disclaimer"
              ref={register({ required: true })}
            />
            <span>*I agree to the statements below and have read the TOS</span>
          </div>
        </div>
        <div className={styles.reCaptcha}>
          <Recaptcha
            sitekey="6LdEsMsZAAAAACo-Xo4L5hXcB5zc5Bw_SfasSV8A"
            render="explicit"
            onloadCallback={() => console.log("Recatcha ready!")}
          />
        </div>

        <div className={styles.submit}>
          <input type="submit" value="SUBMIT"></input>
        </div>
      </form>
    </div>
  );
};

export default Form;
