import React from "react";
import styles from "./Product.module.css";
import Navbar from "../components/Nav/Navbar";
import Announcement from "../components/announcement/Announcement";
import NewsLetter from "../components/newsLetter/NewsLetter";
import Footer from "../components/footer/Footer";
import styled from "styled-components";
import { FiMinus } from "react-icons/fi";
import { RiAddFill } from "react-icons/ri";

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0 5px;
  cursor: pointer;
`;

const Product = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <Announcement />

      <div className={styles.wrapper}>
        <div className={styles["images-container"]}>
          <img src="https://i.ibb.co/S6qMxwr/jean.jpg" alt="Jeans" />
        </div>
        <div className={styles["info-container"]}>
          <h1>Denim Jumpsuit</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero
            suscipit voluptatum saepe neque placeat reprehenderit eos natus
            corrupti nostrum dolor voluptate earum molestiae animi autem, ullam
            maiores tempora libero porro.
          </p>
          <span className={styles.price}>$ 20</span>
          <div className={styles["filter-container"]}>
            <div className={styles.filter}>
              <span className={styles["filter-title"]}>Color</span>
              <FilterColor className={styles["filter-Color"]} color="black" />
              <FilterColor
                className={styles["filter-Color"]}
                color="darkblue"
              />
              <FilterColor className={styles["filter-Color"]} color="grey" />
            </div>
            <div className={styles.filter}>
              <span className={styles["filter-title"]}>Size</span>
              <select className={styles["filter-size"]}>
                <option>XS</option>
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
              </select>
            </div>
          </div>
          <div className={styles["add-container"]}>
            <div className={styles["amount-container"]}>
              <button className=".small-btn">
                <FiMinus />
              </button>
              <span>1</span>
              <button className=".small-btn">
                <RiAddFill />
              </button>
            </div>
            <button className="btn btn-secondary">ADD TO CART</button>
          </div>
        </div>
      </div>
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Product;
