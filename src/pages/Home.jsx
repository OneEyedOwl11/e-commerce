import React from "react";
import Announcement from "../components/Announcement.jsx";
import Categories from "../components/Categories.jsx";
import Footer from "../components/Footer.jsx";
import Navbar from "../components/Navbar.jsx";
import Newsletter from "../components/Newsletter.jsx";
import Products from "../components/Products.jsx";
import Slider from "../components/Slider.jsx";
import {useEffect} from "react";

const Home = () => {
  useEffect(() => 
  {
    window.scroll(0, 0)
  }, []);
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider/>
      <Categories/>
      <Products/>
      <Newsletter/>
      <Footer/>
    </div>
  );
};

export default Home;
