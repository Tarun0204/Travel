import React from "react";
import Navbar from "./Navbar";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import home1 from "../assets/home1.webp";
import home2 from "../assets/home2.jpg";
import home3 from "../assets/home3.jpg";
import home4 from "../assets/home4.jpg";
import home5 from "../assets/home5.webp";
import Gallery from "./Gallery";
import Footer from "./Footer";
import Faq from "./Faq";
import "../styles/Home.css";
import Destinations from "./Destinations"
import Amenities from "./Amenities";

const images = [home1, home2, home3, home4, home5];

const Home = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnHover: false,
  };

  return (
    <div style={{ width: "100%", overflow: "hidden" }}>
      <Navbar />
      <div className="home-container">
        <div className="slider-container">
          <Slider {...settings} className="image-slider">
            {images.map((image, index) => (
              <div key={index} className="slide">
                <div className="image-wrapper">
                  <img
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className="slider-img"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <Amenities />
      <Destinations />
      <Gallery />
      <div style={{ width: "100%", overflow: "hidden" }}>
        <Faq />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
