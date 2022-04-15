import React from "react";
import Announcement from "../components/Announcement.jsx";
import Categories from "../components/Categories.jsx";
import Navbar from "../components/Navbar.jsx";
import Products from "../components/Products.jsx";
import Slider from "../components/Slider.jsx";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider/>
      <Categories/>
      <Products/>
    </div>
  );
};

export default Home;
