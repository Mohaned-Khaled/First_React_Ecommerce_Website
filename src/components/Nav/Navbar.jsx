import React from "react";
import styles from "./Navbar.module.css";
import { BiSearchAlt2 } from "react-icons/bi";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <div className={styles.language}>EN</div>
          <div className={styles["search-container"]}>
            <input type="text" className={styles.input} placeholder="Search" />
            <BiSearchAlt2 className={styles["search-icon"]} />
          </div>
        </div>

        <div className={styles.center}>
          <div className={styles.logo}>LAMA.</div>
        </div>

        <div className={styles.right}>
          <div className={styles["menu-item"]}>
            <Link to="/register">REGISTER</Link>
          </div>
          <div className={styles["menu-item"]}>
            <Link to="/login">SIGN IN</Link>
          </div>
          <div className={styles["menu-item"]}>
            <Link to="/cart">
              <FiShoppingCart className={styles["shopping-icon"]} />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
