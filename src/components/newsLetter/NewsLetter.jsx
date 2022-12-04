import React from "react";
import styles from "./NewsLetter.module.css";
import { IoSend } from "react-icons/io5";

const NewsLetter = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>NewsLetter</h1>
      <p className={styles.description}>
        Get timely updates from your favorite products
      </p>
      <div className={styles["input-container"]}>
        <input type="email" placeholder="Your Email" />
        <button className={styles.button}>
          <IoSend />
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
