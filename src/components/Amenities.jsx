import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/Amenities.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHotel,
  faUtensils,
  faBullhorn,
  faGlobeAsia,
  faPlane,
  faHiking,
} from "@fortawesome/free-solid-svg-icons";

const servicesData = [
  {
    icon: faHotel,
    title: "Hotel",
    description: "Travel is the movement of people.",
  },
  {
    icon: faUtensils,
    title: "Food & Drinks",
    description:
      "Travel can be done by foot, bicycle, automobile, train, boat, bus, airplane, ship or other means.",
  },
  {
    icon: faBullhorn,
    title: "Safety Guide",
    description:
      "Travel is the movement of people between distant geographical locations.",
  },
  {
    icon: faGlobeAsia,
    title: "Around The World",
    description:
      "Travel can be done by foot, bicycle, automobile, train, boat, bus, airplane, ship or other means.",
  },
  {
    icon: faPlane,
    title: "Fastest Travel",
    description:
      "Travel is the movement of people between distant geographical locations.",
  },
  {
    icon: faHiking,
    title: "Adventures",
    description:
      "Travel is the movement of people between distant geographical locations.",
  },
];

const Amenities = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="services" id="services">
      <div className="container">
        <div className="main-txt" data-aos="fade-up">
          <h1>
            <span>A</span>menities
          </h1>
        </div>
        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div key={index} className="service-card" data-aos="zoom-in">
              <FontAwesomeIcon icon={service.icon} className="service-icon" />
              <div className="card-body">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
