import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Bell from "../assets/Bell.jpeg";
import "../styles/Subscribe.css";

const Subscribe = () => {
  const [email, setEmail] = useState("");

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleSubscribe = () => {
    if (email.trim() === "") {
      toast.warn("Please enter your email to subscribe!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.success("Subscribed Successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setEmail("");
    }
  };

  return (
    <div className="subscribe-section" data-aos="fade-down">
      <div className="subscribe-left" data-aos="fade-right">
        <img src={Bell} alt="Bell Icon" className="bell-icon" />
        <div className="subscribe-content">
          <h1 className="subscribe-heading">Get More Updates</h1>
          <p className="subscribe-para">Subscribe to our Newsletter</p>
        </div>
      </div>

      <div className="subscribe-right" data-aos="fade-left">
        <input
          type="email"
          className="input-field"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          type="button"
          className="subscribe-btn"
          onClick={handleSubscribe}
        >
          Subscribe
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Subscribe;
