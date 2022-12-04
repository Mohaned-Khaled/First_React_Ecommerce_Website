import styles from "./Footer.module.css";
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitterSquare,
  FaPinterestSquare,
} from "react-icons/fa";

import { BiMap, BiPhoneCall, BiMessageAltMinus } from "react-icons/bi";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h1 className={styles.logo}>LAMA.</h1>
        <p className={styles.desc}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Exercitationem, voluptatem a mollitia corrupti aliquam porro
          perspiciatis quis autem illum impedit.
        </p>
        <div className={styles["social-container"]}>
          <div className={`${styles.social} ${styles.facebook}`}>
            <FaFacebookSquare />
          </div>
          <div className={`${styles.social} ${styles.instgram}`}>
            <FaInstagram />
          </div>
          <div className={`${styles.social} ${styles.twitter}`}>
            <FaTwitterSquare />
          </div>
          <div className={`${styles.social} ${styles.pinterest}`}>
            <FaPinterestSquare />
          </div>
        </div>
      </div>

      <div className={styles.center}>
        <h3 className={styles.title}>Useful Links</h3>
        <ul className={styles.list}>
          <li className={styles["list-item"]}>Home</li>
          <li className={styles["list-item"]}>Cart</li>
          <li className={styles["list-item"]}>Man Fashion</li>
          <li className={styles["list-item"]}>Woman Fashion</li>
          <li className={styles["list-item"]}>Accessories</li>
          <li className={styles["list-item"]}>My Account</li>
          <li className={styles["list-item"]}>Order Tracking</li>
          <li className={styles["list-item"]}>Wishlist</li>
          <li className={styles["list-item"]}>Terms</li>
        </ul>
      </div>

      <div className={styles.right}>
        <h3 className={styles.title}>Contact</h3>
        <div className={styles["contact-item"]}>
          <BiMap className={styles.icons} />
          322 Nasr-City , Cairo, Egypt
        </div>
        <div className={styles["contact-item"]}>
          <BiPhoneCall className={styles.icons} /> +20 123 987 123
        </div>
        <div className={styles["contact-item"]}>
          <BiMessageAltMinus className={styles.icons} />
          contact@lama.dev
        </div>
        <img
          className={styles.payment}
          src="https://i.ibb.co/Qfvn4z6/payment.png"
          alt="payment"
        />
      </div>
    </div>
  );
};

export default Footer;
