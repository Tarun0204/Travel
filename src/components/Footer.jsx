import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Infy from "../assets/Infy.jpg";
import { MdOutlinePhoneCallback, MdOutlineMailOutline } from "react-icons/md";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaWhatsapp,
  FaPinterest,
} from "react-icons/fa";
import Subscribe from "./Subscribe";
import "../styles/Footer.css";

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div style={{ width: "100%", overflow: "hidden" }}>
        <Subscribe />
        <div className="footer-container" data-aos="fade-up">
          <div className="footer-content">
            <div className="top">
              <div className="top-content" data-aos="fade-right">
                <h1 className="footer-heading">Registered Office</h1>
                <hr className="golden-rod-style" />
                <p className="footer-para">
                  No 10, 8th Main, 12th Cross, Vinayaka Nagar B block, Konene
                  Agrahara, Bangalore - 560017
                </p>
              </div>
              <div className="top-content" data-aos="fade-up">
                <h1 className="footer-heading">Headquarters</h1>
                <hr className="golden-rod-style" />
                <p className="footer-para">
                  No 32, Global Incubation Services, CA Site, No 1, HAL 3rd
                  Stage EXTN, behind Hotel Leela Palace, HAL 2nd Stage,
                  Kodihalli, Bengaluru, Karnataka - 560008
                </p>
              </div>
              <div className="top-content" data-aos="fade-left">
                <h1 className="footer-heading">Nairobi Office</h1>
                <hr className="golden-rod-style" />
                <p className="footer-para">
                  Westpark Towers, Muthithi Road, Nairobi, P.O. Box: 6950 Postal
                  Code - 00100
                </p>
              </div>
            </div>

            <div className="center">
              <div className="top-content" data-aos="zoom-in">
                <h1 className="footer-heading">Kerala Office</h1>
                <hr className="golden-rod-style" />
                <p className="footer-para">
                  39/2475-B1, Suite 80, LR Towers, SJRRA 104, S Janatha Road,
                  Palavivatton, Kochi, Ernakulam, Kerala - 682025
                </p>
              </div>
              <div className="top-content" data-aos="zoom-in">
                <h1 className="footer-heading">Tamil Nadu Office</h1>
                <hr className="golden-rod-style" />
                <p className="footer-para">
                  The workvilla old no 669 new no 306, kamala arcade, Thousand
                  lights, Anna Salai, Chennai, Chennai, Tamil Nadu - 600006
                </p>
              </div>
              <div className="top-content" data-aos="zoom-in">
                <h1 className="footer-heading">Goa Office</h1>
                <hr className="golden-rod-style" />
                <p className="footer-para">
                  No. 66, Phase IV, Verna Industrial Estate, Verna, Goa, South
                  Goa, Goa - 403722
                </p>
              </div>
            </div>

            <div className="bottom">
              <div className="top-content" data-aos="flip-left">
                <h1 className="footer-heading">Contact Us</h1>
                <hr className="golden-rod-style" />
                <p className="footer-para">
                  <MdOutlinePhoneCallback /> +91 9141001434
                </p>
                <p className="footer-para">
                  <MdOutlineMailOutline /> support@travelunbounded.com
                </p>
              </div>
              <div className="top-content" data-aos="flip-up">
                <img
                  src={Infy}
                  className="footer-logo"
                  alt="Travel Unbounded Logo"
                />
                <h1 className="footer-logo-heading">Travel Unbounded</h1>
              </div>
              <div className="top-content" data-aos="flip-right">
                <h1 className="footer-heading">Follow Us</h1>
                <hr className="golden-rod-style" />
                <div className="social-icons">
                  <FaFacebook className="social-icon" />
                  <FaInstagram className="social-icon" />
                  <FaYoutube className="social-icon" />
                  <FaLinkedin className="social-icon" />
                  <FaWhatsapp className="social-icon" />
                  <FaPinterest className="social-icon" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="copy-rights">
          <p className="copyright-text">
            © 2025 Travel Unbounded. All rights reserved.
          </p>
          <div className="footer-links">
            <div className="footer-links-group">
              <a href="/privacy-policy">Privacy Policy</a>
              <a href="/terms-and-conditions">Terms and Conditions</a>
            </div>
            <div className="footer-links-group">
              <a href="/cancellation-refund-policy">
                Cancellation & Refund Policy
              </a>
              <a href="/write-a-review">Write a Review</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
