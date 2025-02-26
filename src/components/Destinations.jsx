import React, { useState } from "react";
import gallery1 from "../assets/gallery1.webp";
import gallery2 from "../assets/gallery2.webp";
import gallery3 from "../assets/gallery3.avif";
import d1 from "../assets/d1.jpg"
import "../styles/Destinations.css";

const cityPackages = [
  {
    id: 1,
    name: "Maasai Mara",
    description:
      "November is one of the best times to visit Kenya, especially its prime park, Maasai Mara. The large migratory herds return to Tanzania, forcing the big cats to travel long distances to hunt. This period also marks the season of short rains, turning the Maasai Mara plains lush green, with dramatic and colorful skies. Sunrises and sunsets are breathtaking during this time. We have curated this itinerary at an affordable cost to celebrate our first anniversary of operations in Nairobi.",
    buttonText: "Join us on this unforgettable journey!",
    imgUrl: d1,
  },
  {
    id: 2,
    name: "Kenya",
    description:
      "Kenya is a country of dramatic extremes, featuring open plains, dense forests, snow-capped mountains, deserts, and coral reefs. Known as the 'Mecca of Wildlife,' Kenya is famous for its spectacular savannah safaris and diverse ecosystems.",
    buttonText: "Explore Kenya's Wildlife Adventures",
    imgUrl: gallery1,
  },
  {
    id: 3,
    name: "Vietnam",
    description:
      "Vietnam, with its rich history, vibrant culture, and breathtaking landscapes, is a top holiday destination. The country is tourist-friendly and affordable, offering year-round travel opportunities. It is an excellent choice for families and friends looking for adventure and relaxation.",
    buttonText: "Discover the Beauty of Vietnam",
    imgUrl: gallery2,
  },
  {
    id: 4,
    name: "Tanzania",
    description:
      "Tanzania, home to Africa’s highest peak, Mount Kilimanjaro, is one of the most sought-after wildlife destinations. Known as the 'Land of Safaris,' it hosts the Great Migration, where millions of wildebeests and other animals cross into Maasai Mara every year.",
    buttonText: "Experience the Serengeti in Tanzania",
    imgUrl: gallery3,
  },
];

const Destinations = () => {
  const [expanded, setExpanded] = useState({});

  const toggleReadMore = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="packages">
      <div className="container">
        <h1 className="main-title">
          <span>D</span>estinations
        </h1>
        <div className="grid">
          {cityPackages.map((city) => (
            <div className="card" key={city.id}>
              <img src={city.imgUrl} alt={city.name} className="city-image" />
              <div className="card-body">
                <h3>{city.name}</h3>
                <div className="desc-content">
                <p className={`description ${expanded[city.id] ? "expanded" : ""}`}>
                  {expanded[city.id]
                    ? city.description
                    : `${city.description.substring(0, 120)}`}
                     <button onClick={() => toggleReadMore(city.id)} className="read-more-btn">
                  {expanded[city.id] ? "Read Less" : "Read More"}
                </button>
                </p>
                </div>
                <button className="book-btn">{city.buttonText}</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
