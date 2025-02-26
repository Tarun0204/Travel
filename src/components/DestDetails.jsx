import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import details from "../details";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/Details.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

const DestDetails = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const { city } = useParams();

  const destination = details.destinations.find(
    (d) => d.id.toLowerCase() === city.toLowerCase()
  );

  if (!destination) {
    return <h2 className="dest-not-found">Destination Not Found</h2>;
  }

  return (
    <div style={{ width: "100%", overflow: "hidden" }}>
      <Navbar />
      <div className="dest-container">
        <h1 className="dest-title" data-aos="fade-down">
          {destination.title}
        </h1>
        <p className="dest-description" data-aos="fade-up">
          {destination.description}
        </p>

        {destination.national_parks?.length > 0 && (
          <div className="dest-section" data-aos="fade-right">
            <h2 className="dest-heading">National Parks</h2>
            {destination.national_parks.map((park, index) => (
              <div key={index} className="dest-card">
                <h3 className="dest-card-title">{park.name}</h3>
                <p className="dest-card-text">{park.description}</p>
                {park.highlights?.length > 0 && (
                  <>
                    <h4 className="dest-subheading">Highlights:</h4>
                    <ul className="dest-list">
                      {park.highlights.map((highlight, idx) => (
                        <li key={idx} className="dest-list-item">
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            ))}
          </div>
        )}

        {destination.must_see_attractions?.length > 0 && (
          <div className="dest-section" data-aos="fade-left">
            <h2 className="dest-heading">Must-See Attractions</h2>
            {destination.must_see_attractions.map((attraction, index) => (
              <div key={index} className="dest-card">
                <h3 className="dest-card-title">{attraction.name}</h3>
                {attraction.location && (
                  <p className="dest-card-text">
                    <strong>Location:</strong> {attraction.location}
                  </p>
                )}
                <p className="dest-card-text">{attraction.description}</p>

                {attraction.highlights?.length > 0 && (
                  <>
                    <h4 className="dest-subheading">Highlights:</h4>
                    <ul className="dest-list">
                      {attraction.highlights.map((highlight, idx) => (
                        <li key={idx} className="dest-list-item">
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            ))}
          </div>
        )}

        {destination.visa_requirements && (
          <div className="dest-section" data-aos="fade-up">
            <h2 className="dest-heading">Visa Requirements</h2>
            {destination.visa_requirements.e_visa && (
              <p className="dest-card-text">
                <strong>E-Visa:</strong> {destination.visa_requirements.e_visa}
              </p>
            )}
            {destination.visa_requirements.visa_free_entry && (
              <p className="dest-card-text">
                <strong>Visa-Free Entry:</strong>{" "}
                {destination.visa_requirements.visa_free_entry}
              </p>
            )}
            {destination.visa_requirements.single_entry_visa && (
              <p className="dest-card-text">
                <strong>Single Entry Visa:</strong>{" "}
                {destination.visa_requirements.single_entry_visa}
              </p>
            )}
          </div>
        )}

        {destination.climate && (
          <div className="dest-section" data-aos="zoom-in">
            <h2 className="dest-heading">Climate</h2>
            <p className="dest-card-text">{destination.climate}</p>
          </div>
        )}

        {destination.geography && (
          <div className="dest-section" data-aos="flip-up">
            <h2 className="dest-heading">Geography</h2>
            <p className="dest-card-text">{destination.geography}</p>
          </div>
        )}

        {destination.airports?.length > 0 && (
          <div className="dest-section" data-aos="zoom-out">
            <h2 className="dest-heading">Airports</h2>
            {destination.airports.map((airport, index) => (
              <div key={index} className="dest-card">
                <h3 className="dest-card-title">{airport.name}</h3>
                <p className="dest-card-text">
                  <strong>Location:</strong> {airport.location}
                </p>
                <p className="dest-card-text">{airport.description}</p>
              </div>
            ))}
          </div>
        )}

        {destination.culture && (
          <div className="dest-section" data-aos="fade-down">
            <h2 className="dest-heading">Culture</h2>
            <p className="dest-card-text">{destination.culture}</p>
          </div>
        )}

        {destination.top_destinations?.length > 0 && (
          <div className="dest-section" data-aos="fade-up">
            <h2 className="dest-heading">Top Destinations</h2>
            {destination.top_destinations.map((category, index) => (
              <div key={index} className="dest-category">
                <h3 className="dest-category-title">{category.category}</h3>
                {category.places?.map((place, idx) => (
                  <div key={idx} className="dest-card">
                    <h4 className="dest-card-title">{place.name}</h4>
                    <p className="dest-card-text">{place.description}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default DestDetails;
