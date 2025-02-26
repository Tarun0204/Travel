import React from "react";
import "../styles/Gallery.css"
import gallery1 from "../assets/gallery1.webp";
import gallery2 from "../assets/gallery2.webp";
import gallery3 from "../assets/gallery3.avif";
import gallery4 from "../assets/gallery4.webp";
import gallery5 from "../assets/gallery5.webp";
import gallery6 from "../assets/gallery6.webp";

const GalleryImages = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
];

const Gallery = () => {
  return (
    <section className="gallery" id="gallery">
      <div className="container">
        <div className="main-txt">
          <h1>
            <span>G</span>allery
          </h1>
        </div>

        <div className="gallery-grid">
          {GalleryImages.map((image, index) => (
            <div className="gallery-card" key={index}>
              <img src={image} alt={`Gallery ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
