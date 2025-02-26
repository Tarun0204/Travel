import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import gallery1 from "../assets/gallery1.webp";
import gallery2 from "../assets/gallery2.webp";
import gallery3 from "../assets/gallery3.avif";
import d1 from "../assets/d1.jpg";
import d2 from "../assets/d2.webp";
import d3 from "../assets/d3.webp";
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
  {
    id: 5,
    name: "Kerala",
    description:
      "Known for its serene backwaters, lush landscapes, and beautiful beaches, Kerala offers a peaceful escape. Experience houseboat rides in Alleppey, the misty tea gardens of Munnar, and the cultural richness of its temples and festivals. The state's vibrant wildlife sanctuaries and Ayurvedic retreats also provide a rejuvenating experience for nature and wellness enthusiasts.",
    buttonText: "Explore Kerala's Beauty",
    imgUrl: d2,
  },
  {
    id: 6,
    name: "Iceland",
    description:
      "Iceland, the land of fire and ice, offers some of the most dramatic landscapes on Earth. From active volcanoes and geysers to vast glaciers and stunning waterfalls, Iceland's natural beauty is unmatched. Visitors can explore the Golden Circle, witness the northern lights, or relax in the geothermal Blue Lagoon. The island also boasts vibrant culture and history, with a strong connection to Norse mythology. It's a perfect destination for adventure seekers and nature lovers alike.",
    buttonText: "Visit Iceland",
    imgUrl: d3,
  },
];

const Destinations = () => {
  const [expanded, setExpanded] = useState({});

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

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
          {cityPackages.map((city, index) => (
            <div
              className="des-card"
              key={city.id}
              data-aos={index % 2 === 0 ? "zoom-in" : "zoom-out"}
            >
              <img src={city.imgUrl} alt={city.name} className="city-image" />
              <div className="card-body">
                <h3>{city.name}</h3>
                <div className="desc-content">
                  <p
                    className={`description ${
                      expanded[city.id] ? "expanded" : ""
                    }`}
                  >
                    {expanded[city.id]
                      ? city.description
                      : `${city.description.substring(0, 120)}...`}
                    <button
                      onClick={() => toggleReadMore(city.id)}
                      className="read-more-btn"
                    >
                      {expanded[city.id] ? "Read Less" : "Read More"}
                    </button>
                  </p>
                </div>
                <Link
                  to={
                    city.id === 1
                      ? "/maasai-mara"
                      : `/${city.name.toLowerCase()}`
                  }
                >
                  <button className="book-btn">{city.buttonText}</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;