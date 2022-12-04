import React from "react";
import { FaStaylinked } from "react-icons/fa";
import Announcement from "../components/announcement/Announcement";
import Footer from "../components/footer/Footer";
import Navbar from "../components/Nav/Navbar";
import styles from "./Cart.module.css";
import styled from "styled-components";
import { FiMinus } from "react-icons/fi";
import { RiAddFill } from "react-icons/ri";

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const Cart = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <Announcement />
      <div className={styles.wrapper}>
        <h1 className={styles.title}>YOUR BAG</h1>
        <div className={styles.top}>
          <button className="btn">CONTINUE SHOPPING</button>
          <div className={styles["top-texts"]}>
            <span className={styles["top-text"]}>Shopping Bag(2)</span>
            <span className={styles["top-text"]}>Your WishList (0)</span>
          </div>
          <button className="btn btn-secondary">CHECKOUT NOW</button>
        </div>
        <div className={styles.bottom}>
          <div className={styles.info}>
            <div className={styles.product}>
              <div className={styles["product-details"]}>
                <img
                  src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A"
                  alt=" "
                />
                <div className={styles.details}>
                  <span>
                    <b>Product:</b> JESSIE THUNDER SHOES
                  </span>
                  <span>
                    <b>ID:</b>21215445115
                  </span>
                  <ProductColor color="black" />
                  <span>
                    <b>Size:</b>37.5
                  </span>
                </div>
                <div className={styles["price-details"]}>
                  <div className={styles["product-amount_container"]}>
                    <button className="small-btn">
                      <RiAddFill />
                    </button>
                    <span className={styles.amount}>1</span>
                    <button className="small-btn">
                      <FiMinus />
                    </button>
                  </div>
                  <div className={styles["product-price"]}>$ 30</div>
                </div>
              </div>
              <hr />
              <div className={styles["product-details"]}>
                <img
                  src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png"
                  alt=" "
                />
                <div className={styles.details}>
                  <span>
                    <b>Product:</b> HAKURA T-SHIRT
                  </span>
                  <span>
                    <b>ID:</b>21215445115
                  </span>
                  <ProductColor color="gray" />
                  <span>
                    <b>Size:</b>M
                  </span>
                </div>
                <div className={styles["price-details"]}>
                  <div className={styles["product-amount_container"]}>
                    <button className="small-btn">
                      <RiAddFill />
                    </button>
                    <span className={styles.amount}>2</span>
                    <button className="small-btn">
                      <FiMinus />
                    </button>
                  </div>
                  <div className={styles["product-price"]}>$ 80</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.summary}>
            <h1>ORDER SUMMARY</h1>
            <div className={styles["summary-item"]}>
              <div>Subtotal</div>
              <span>$ 80</span>
            </div>
            <div className={styles["summary-item"]}>
              <div>Estimated Shipping</div>
              <span>$ 5.90</span>
            </div>
            <div className={styles["summary-item"]}>
              <div> Shipping Discount</div>
              <span>$ -5.90</span>
            </div>
            <div className={styles["summary-item"]}>
              <div className={styles.total}>Total</div>
              <span className={styles.total}>$ 80</span>
            </div>
            <button className="btn">CHECKOUT NOW</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
