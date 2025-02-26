import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/Faq.css";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const faqs = [
    {
      question: "Why should I book with Travel Unbounded in Bangalore?",
      answer:
        "We offer exclusive packages, expert travel advice, and unbeatable customer support to make your trip unforgettable.",
    },
    {
      question: "Does Travel Unbounded provide international tour packages?",
      answer:
        "Absolutely! We design itineraries tailored to your preferences, ensuring a unique travel experience. Yes, we specialize in both domestic and international travel, including destinations like Kenya, Vietnam, and Dubai.",
    },
    {
      question: "Can I customize my travel itinerary?",
      answer:
        "Yes! We provide fully customizable itineraries to suit your travel preferences and schedule.",
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div className="top-section" data-aos="fade-up">
        <h1 className="faq-heading">
          Which Company is Best for Travel Agency in Bangalore?
        </h1>
        <p className="faq-text">
          If you're looking for the best travel agency in Bangalore, your search
          ends with <strong>Travel Unbounded</strong>. Known for its exceptional
          customer service and carefully curated tour packages, Travel Unbounded
          stands out as a top choice for travelers seeking memorable
          experiences. Whether you’re planning a luxury vacation, an
          adventure-packed journey, or a relaxing getaway, Travel Unbounded
          offers tailored solutions to meet your needs.
        </p>

        <h1 className="faq-heading">Why Choose Travel Unbounded?</h1>
        <ul className="faq-list">
          <li data-aos="fade-right">
            <strong>Wide Range of Destinations:</strong> From the serene
            backwaters of Kerala to thrilling safaris in Kenya and cultural
            tours in Vietnam, we bring you the world’s most iconic locations.
          </li>
          <li data-aos="fade-left">
            <strong>Customized Packages:</strong> We understand that every
            traveler is unique, which is why we offer personalized itineraries.
          </li>
          <li data-aos="fade-right">
            <strong>Affordable Pricing:</strong> With competitive pricing, we
            ensure that your dream vacation fits your budget.
          </li>
          <li data-aos="fade-left">
            <strong>Expert Guidance:</strong> Our team of travel experts
            provides 24/7 assistance, ensuring a hassle-free journey.
          </li>
          <li data-aos="fade-right">
            <strong>Client Testimonials:</strong> Hundreds of satisfied
            customers vouch for our professionalism and attention to detail.
          </li>
        </ul>
      </div>

      <div className="faq-container" data-aos="zoom-in">
      <h1 className="faq-title">
          <span>F</span>requently <span>A</span>sked <span>Q</span>uestions
        </h1>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item" data-aos="fade-up">
              <button
                className="faq-question"
                onClick={() => toggleAccordion(index)}
              >
                {faq.question}
                <span className="faq-icon">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <div className="faq-answer" data-aos="fade-down">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Faq;
