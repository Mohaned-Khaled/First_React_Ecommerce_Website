import React from "react";
import { popularProducts } from "../../data";
import styles from "./Products.module.css";
import Product from "./Product";

const Products = () => {
  return (
    <div className={styles.container}>
      {popularProducts.map((product) => (
        <Product key={product.id} item={product} />
      ))}
    </div>
  );
};

export default Products;
