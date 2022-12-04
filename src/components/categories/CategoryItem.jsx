import { Link } from "react-router-dom";
import styles from "./CategoryItem.module.css";

const CategoryItem = (props) => {
  console.log(props);
  return (
    <div className={styles.container}>
      <img className={styles.image} src={props.item.img} alt="" />
      <div className={styles.info}>
        <h1 className={styles.title}>{props.item.title}</h1>
        <button className="btn btn-primary">
          <Link to="/product-list">SHOP NOW</Link>
        </button>
      </div>
    </div>
  );
};

export default CategoryItem;
