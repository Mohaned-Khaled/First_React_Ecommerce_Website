import React from "react";
import { categories } from "../../data";
import styles from "./Categories.module.css";
import CategoryItem from "./CategoryItem";

const Categories = () => {
  return (
    <div className={styles.container}>
      {categories.map((item) => (
        <CategoryItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Categories;
