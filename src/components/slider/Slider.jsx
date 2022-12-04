import styles from "./Slider.module.css";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { useState } from "react";
import { sliderItems } from "../../data";

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  console.log(slideIndex);

  const slideLeftHandler = function () {
    setSlideIndex((prevIndex) => {
      return prevIndex > 0 ? prevIndex - 1 : sliderItems.length - 1;
    });
  };

  const slideRightHandler = function () {
    setSlideIndex((prevIndex) => {
      return prevIndex < sliderItems.length - 1 ? prevIndex + 1 : 0;
    });
  };

  const editingIndex = slideIndex * -100;

  return (
    <div className={styles.container}>
      <button
        className={`${styles.arrow} ${styles.left}`}
        onClick={slideLeftHandler}
      >
        <AiOutlineArrowLeft />
      </button>

      <button
        className={`${styles.arrow} ${styles.right}`}
        onClick={slideRightHandler}
      >
        <AiOutlineArrowRight />
      </button>

      <div
        className={styles.wrapper}
        style={{ transform: `translateX(${editingIndex}vw)` }}
      >
        {sliderItems.map((data) => (
          <div
            key={data.id}
            className={styles.slide}
            style={{ backgroundColor: data.bg }}
          >
            <div className={styles["img-container"]}>
              <img className={styles.image} src={data.img} alt="" />
            </div>
            <div className={styles["info-container"]}>
              <h1 className={styles.title}>{data.title}</h1>
              <p className={styles.description}>{data.desc}</p>
              <button className="btn">SHOW NOW</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
