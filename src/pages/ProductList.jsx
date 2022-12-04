import React from "react";
import styles from "./ProductList.module.css";
import Navbar from "../components/Nav/Navbar";
import Announcement from "../components/announcement/Announcement";
import Products from "../components/products/Products";
import NewsLetter from "../components/newsLetter/NewsLetter";
import Footer from "../components/footer/Footer";

const ProductList = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <Announcement />
      <h1 className={styles.title}>Dresses</h1>
      <div className={styles["filter-container"]}>
        <div className={styles.filter}>
          <span className={styles["filter-text"]}>Filter Products:</span>
          <select name="" id="">
            <option disabled selected>
              Color
            </option>
            <option>White</option>
            <option>Black</option>
            <option>Red</option>
            <option>Blue</option>
            <option>Yellow</option>
            <option>Green</option>
          </select>
          <select>
            <option disabled selected>
              Size
            </option>
            <option>XS</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
          </select>
        </div>
        <div className={styles.filter}>
          <span className={styles["filter-text"]}>Sort Products:</span>
          <select>
            <option selected>Newest</option>
            <option>Price (asc)</option>
            <option>Black (desc)</option>
          </select>
        </div>
      </div>
      <Products />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default ProductList;
