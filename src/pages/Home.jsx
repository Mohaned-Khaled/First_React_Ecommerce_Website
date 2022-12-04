import React, { Fragment } from "react";
import Announcement from "../components/announcement/Announcement";
import Categories from "../components/categories/Categories";
import Footer from "../components/footer/Footer";
import Navbar from "../components/Nav/Navbar";
import NewsLetter from "../components/newsLetter/NewsLetter";
import Products from "../components/products/Products";
import Slider from "../components/slider/Slider";

const Home = () => {
  return (
    <Fragment>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <NewsLetter />
      <Footer />
    </Fragment>
  );
};

export default Home;
