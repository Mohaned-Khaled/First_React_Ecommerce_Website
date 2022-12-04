import React from "react";
import styles from "./Login.module.css";

const Register = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>CREATE AN ACCOUNT</h1>
        <form>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />

          <button className="btn btn-secondary">LOGIN</button>
          <a href="/#">DO NOT REMEMBER THE PASSWORD?</a>
          <a href="/#">CREATE A NEW ACCOUNT</a>
        </form>
      </div>
    </div>
  );
};

export default Register;
