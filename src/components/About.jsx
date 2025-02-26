import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./Footer";
import "../styles/About.css";
import Navbar from "./Navbar";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div style={{ width: "100%", overflow: "hidden" }}>
      <Navbar />
      <div className="about-container">
        <div className="top-container" data-aos="fade-up">
          <h1 className="abt-heading">
            Welcome to Travel Unbounded, your gateway to unforgettable
            adventures!
          </h1>
          <p className="abt-para" data-aos="fade-right">
            As a dedicated travel company, we believe in authenticity and
            firsthand experience. We promote destinations, resorts, and local
            experiences only after one of our team members has personally
            explored them. This commitment to genuine exploration sets us apart
            and strengthens our expertise in the destinations we represent,
            ensuring our clients receive nothing less than the best.
          </p>
          <p className="abt-para" data-aos="fade-left">
            We are a leading experiential travel company headquartered at
            Bangalore. We have our own branch offices in Kerala, Tamil Nadu,
            Goa, and in Nairobi, Kenya.
          </p>
          <p className="abt-para" data-aos="fade-right">
            We specialize in crafting customized itineraries that cater to the
            unique desires of every traveler, with a special focus on honeymoon
            couples, families, large groups, and nature lovers.
          </p>
          <p className="abt-para" data-aos="fade-left">
            From the serene beaches of Bali to the vibrant wildlife of Kenya, we
            bring exotic locations to life, ensuring every journey is a seamless
            blend of exploration, relaxation, and connection.
          </p>
          <p className="abt-para" data-aos="fade-right">
            We take pride in catering to all ages, making family travel our
            specialty. From thrilling safaris that captivate young explorers to
            tranquil retreats that allow families to reconnect, we design
            experiences that foster shared memories and inspire a sense of
            wonder.
          </p>
          <p className="abt-para" data-aos="fade-left">
            Our dedicated team works tirelessly to create personalized
            experiences that resonate with travelers of all ages, resulting in
            countless happy customers who eagerly share their adventures with
            friends and family.
          </p>
          <p className="abt-para" data-aos="fade-right">
            Join the thousands of satisfied travelers who have embarked on their
            dream vacations with us and returned home not just with souvenirs,
            but with stories to share and friendships to cherish. Let Travel
            Unbounded be your trusted partner in exploring the world’s most
            exotic and wild destinations, where every trip is a new chapter in
            your adventure story!
          </p>
        </div>

        <div className="bottom-container" data-aos="fade-up">
          <h1 className="abt-heading">Our Journey</h1>
          <p className="abt-para" data-aos="fade-right">
            2014 - Founded by K. Chandrashekar, our journey began in a cozy café
            in Bangalore, where a passion for nature and adventure sparked the
            creation of our proprietary firm. We initially catered to 100 nature
            enthusiasts, designing customized itineraries that took them to some
            of the most stunning parks in India and Africa.
          </p>
          <p className="abt-para" data-aos="fade-left">
            2015 - 2016 - Thanks to the enthusiastic word-of-mouth referrals
            from our guests, we evolved from a small venture into a Private
            Limited company, now proudly serving over 1,000 travelers and their
            families. Our expansive offerings include leisure and wilderness
            holidays across India, Africa, Southeast Asia, and the Middle East.
          </p>
          <p className="abt-para" data-aos="fade-right">
            2017 - 2018 - We expanded our reach to manage large corporate events
            in offbeat destinations, successfully catering to corporate groups
            ranging from 100 to 150 attendees per event. Our team grew from just
            4 to 10 dedicated professionals, allowing us to enhance our
            offerings for families seeking leisure holidays around the globe.
          </p>
          <p className="abt-para" data-aos="fade-left">
            2018 - 2020 - We successfully organized large corporate events in
            offbeat destinations, accommodating groups ranging from 150 to 400
            participants. Our wildlife journeys to Africa have seen remarkable
            growth, starting with just 19 guests and reaching an impressive 125
            during the wildebeest migration season alone.
          </p>
          <p className="abt-para" data-aos="fade-right">
            2020 - 2021 - During the challenging times of the pandemic, we
            united to support our community. As pioneers, we launched a web
            series featuring renowned wildlife photographers and media
            personalities, sharing their insights with our guests. All proceeds
            from these events were donated to forest guards and their families
            in need.
          </p>
          <p className="abt-para" data-aos="fade-up">
            2023 - 2024 - In the aftermath of the pandemic, while many travel
            companies faced closure, we emerged stronger than ever. Although
            some of our team members returned to their hometowns, we renewed our
            commitment to excellence and quickly adapted to the changing
            landscape. 2024 has been one of our most successful years,
            particularly in our Africa business.
          </p>
        </div>
      </div>
      <div style={{ width: "100%", overflow: "hidden" }}>
        <Footer />
      </div>
    </div>
  );
};

export default About;
