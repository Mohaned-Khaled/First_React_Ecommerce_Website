import React from "react";
import styles from "./Register.module.css";

const Register = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>CREATE AN ACCOUNT</h1>
        <form>
          <input type=" text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <input type="text" placeholder="Username" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />
          <span>
            By creating an account , I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </span>
          <button className="btn btn-secondary">Create</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
