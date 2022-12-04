import React from "react";
import styles from "./Product.module.css";
import { FiShoppingCart } from "react-icons/fi";
import { BiSearchAlt2 } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

const Product = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.circle}></div>
      <img src={props.item.img} alt="" />
      <div className={styles.info}>
        <div className={styles.icon}>
          <FiShoppingCart />
        </div>
        <div className={styles.icon}>
          <Link to="/product">
            <BiSearchAlt2 />
          </Link>
        </div>
        <div className={styles.icon}>
          <AiOutlineHeart />
        </div>
      </div>
    </div>
  );
};

export default Product;
