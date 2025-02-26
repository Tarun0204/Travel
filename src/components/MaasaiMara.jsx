import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/Massai.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { RxCross2 } from "react-icons/rx";
import { TiTick } from "react-icons/ti";
import { BsInfoCircleFill } from "react-icons/bs";

const data = {
  itinerary: [
    {
      day: "Day 1",
      date: "Nov 14th 2023",
      highlights: [
        "Nov 14th 2023 - Our drivers would pick up from the JKIA airport at 7AM. You would board our 4*4 Landcruisers to embark on your journey to Maasai Mara. The road journey takes about 5 to 6 hours, but you would be amazed by the landscape enroute. You would first see the Nairobi national park on your left side. On a lucky day, you would also see a White Rhino grazing near the fence. Nairobi city has a national park right in its heart!! And it is home for Lions, Leopards, White rhinos, gazzelles, Giraffes, crowned cranes, and other mammals and birds. This is the only city in the World which boasts a National park within the city limits. ",
        "After one hour you would climb up to The Great Rift Valley. This is one priced attraction of Kenya. Formed a millions years back, this valley boasts beautiful lakes and escarpments, which provide havens for plentiful wildlife. The Great Rift Valley runs for 4,000 miles (6,400 kilometers), from Jordan in southwestern Asia to the coast of the Indian Ocean in central Mozambique. We suggest you request your driver to stop when you are on top and enjoy the views of this Nature’s marvel. ",
        "You would reach Maasai Mara by noon. Complete your check in formalities and proceed to lunch. After lunch, you would go on your first game drive on the great plains of Maasai Mara!! ",
        "This afternoon, our experienced Maasai guides/drivers would take you around the Talek and Topi plains area. There you would find a lot of ungulates, antelopes, zebras and also a huge pride of Lions. This pride is called the  ‘Topi Pride’. Relax, sit back and enjoy God’s creations. You would be so excited to see the endless plains of Maasai Mara with its dwellers. ",
        "Return to your camp after 6PM. Refresh yourself and head towards the camp fire. Meet up with your group and listen to their first day experience at Mara. Share your magical experiences with them. Have dinner and retire for the day ( LD ) ",
      ],
      meals: "Lunch, Dinner (LD)",
    },
    {
      day: "Day 2",
      date: "Nov 15th 2023",
      highlights: [
        "Wake up early. Freshen yourself and head to the restaurant for a hot cup of coffee or tea. The mornings are cold at Mara, so do wear your fleece jacket for the morning game drive. Breakfast would be packed for you. Explore the mornings at Mara. The Sunrise you witness at Mara is something which you would never get to witness anywhere in the World. Just pray that it does not rain!! ",
        "Our guides would park the vehicle under a tree for you to have a bush breakfast. This is an out of the World experience. At a distance you can see the animals peacefully grazing while you are enjoying your food. Post your breakfast, proceed again on the game drive. Mid mornings while the Lions sleep is a good time to look around for the cheetahs. November is also the season when the Topis give birth to young ones. On a lucky day, you might witness a Topi giving birth to a little one. Keep a watch on the hyenas as they would always be around a pregnant Topi!",
        "Return to your camp around 11.30AM. Take a nice shower and some much needed rest. Lunch would be served from 12.30 Noon. Have a hot lunch and a short nap. The afternoon game drive would start at 3PM. Today our drivers would try and locate a leopard for you.",
        "Do ask your driver to stop where ever you want to click pictures. Return to the camp post sunset and enjoy your evening at the camp fire with your group. Have dinner and retire early as you have a full day game drive tomorrow.  ( BLD )",
      ],
      meals: "Breakfast, Lunch, Dinner (BLD)",
    },
    {
      day: "Day 3",
      date: "Nov 16th 2023",
      highlights: [
        "Today is a very busy day for you at Mara. Wake up early, freshen yourself, have a hot beverage and jump into your designated vehicles. Today you would be going towards the border of Maasai Mara. You would be going for a full day game drive with packed breakfast and lunch. ",
        "Sand river is the border for Maasai Mara and Tanzania. This has been the entry point of the migratory animals for millions of years. You would be amazed to see such a small river separates two different countries!! Enjoy every bit your time as this is your last day of game drive for this trip. Have lunch and take a small nap like our Maasai guides. Then proceed towards your camp. On the way back encounter a pride of lion. During your stay at Mara, you would have seen the Big 4 our of the Big 5. The Rhino being very elusive is going to be a difficult find. But this area is know for the Rhinos. If you are lucky you would get to see one.",
        "Return to the camp with great memories. Spend you evening at the camp fire before having dinner. Retire for the day. ",
        "Sadly the holiday has come to an end. But at the end you would release that it was the journey which was so beautiful. Have a blissful night. ( BLD )",
      ],
      meals: "Breakfast, Lunch, Dinner (BLD)",
    },
    {
      day: "Day 4",
      date: "Nov 17th 2023",
      highlights: [
        "Wake up at leisure, have a nice and heavy breakfast while you discuss about your experience with your group. Board the designated Landcruisers to embark on the journey to Nairobi. You would be dropped at the JKIA airport. End of services. ( B )",
      ],
      meals: "Breakfast",
    },
  ],
  costs: {
    adult: {
      standard: 1582,
      special_offer: {
        valid_until: "August 14th 2023",
        price: 1322,
      },
    },
    child: {
      standard: 1400,
      special_offer: {
        valid_until: "August 14th 2023",
        price: 1127,
      },
    },
  },
  terms_and_conditions: [
    "Costs are based at 4 paxs per vehicle for game drives and 5 per vehicle for Internal transfers",
    "Stay at Mara would be at Zebra plains or Loyk camp or Julia river camp.",
    "Last day to confirm the tour is August 14th 2023.",
    "Guests travelling should process valid passports with a minimum of 6 months validity from the date of return.",
    "Guests traveling should be administered with Yellow fever vaccination and Oral polio vaccination. The vaccines should be taken at least 15 days prior to travel. The certificates has to be shared for us to send you the invite letter for VISA application.",
    "Guests should intimate us on any medical ailment and Travel Unbounded World Pvt Ltd is not liable for any loss or damage to the guests during the tour.",
    "Guests should provide International travel insurance 15 days prior to travel.",
    "Guests staying at Nairobi one day prior to the travel dates have to reach JKIA airport at 7AM on Nov 14th",
    "Guests staying at Nairobi on Nov 17th would have to arrange their transport from JKIA airport after we drop you.",
    "Lunch on the return on Nov 17th is not a part of the package",
    "Meals are mentioned in brackets at the end of the Day’s itinerary",
    "Groups above 5 can avail special discounts",
    "Vehicles are provided only for internal transfers and game drives, they are not for another purposes or use.",
  ],
  payment_and_cancellation: {
    payment: "100% of the tour cost at the time of booking",
    cancellation: [
      "50% credit if canceled 60 days before travel",
      "No refund if canceled within 30 days of travel",
    ],
  },
  inclusions: [
    "Internal transfers from JKIA airport to Maasai Mara and back by Landcruiser on shared basis",
    "Stay on twin sharing basis at Maasai Mara either at Zebra plains",
    "Game drives in Landcruisers in shared basis - minimum 4 paxs per vehicle",
    "Water during game drives",
    "All meals as mentioned in the itinerary",
    "Park Fees",
    "Guide Fees",
    "English speaking guides/drivers",
  ],
  exclusions: [
    "Any airfare or VISA charges",
    "Personal and medical expenses during the tour",
    "Tips and gratitude",
    "Anything other than mentioned in the Inclusions section",
  ],
};

const MaasaiMara = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <Navbar />
      <div className="maasai-container">
        <h1 className="maasai-title" data-aos="fade-up">
          Maasai Mara - Itenary
        </h1>
        {data.itinerary.map((day, index) => (
          <div className="maasai-day" key={index} data-aos="fade-up">
            <h2 className="maasai-day-title">
              {day.day} - {day.date}
            </h2>
            <ul className="maasai-highlights-list">
              {day.highlights.map((highlight, idx) => (
                <li className="maasai-highlight-item" key={idx}>
                  {highlight}
                </li>
              ))}
            </ul>
            <p className="maasai-meals">
              <strong>Meals:</strong> {day.meals}
            </p>
          </div>
        ))}

        <h1 className="maasai-title" data-aos="fade-up">
          Costs
        </h1>
        <div className="maasai-costs" data-aos="fade-up">
          <h3>Adults</h3>
          <p>Standard: ${data.costs.adult.standard}</p>
          {data.costs.adult.special_offer && (
            <p>
              Special Offer ({data.costs.adult.special_offer.valid_until}): $
              {data.costs.adult.special_offer.price}
            </p>
          )}
        </div>

        <div className="maasai-costs" data-aos="fade-up">
          <h3>Children</h3>
          <p>Standard: ${data.costs.child.standard}</p>
          {data.costs.child.special_offer && (
            <p>
              Special Offer ({data.costs.child.special_offer.valid_until}): $
              {data.costs.child.special_offer.price}
            </p>
          )}
        </div>

        <h1 className="maasai-title" data-aos="fade-up">
          Terms and Conditions
        </h1>
        <ul className="maasai-list" data-aos="fade-up">
          {data.terms_and_conditions.map((term, index) => (
            <li className="maasai-list-item" key={index}>
              <BsInfoCircleFill /> {term}
            </li>
          ))}
        </ul>

        <h1 className="maasai-title" data-aos="fade-up">
          Payment & Cancellation
        </h1>
        <p className="maasai-payment" data-aos="fade-up">
          <strong>Payment:</strong> {data.payment_and_cancellation.payment}
        </p>
        <h3 className="maasai-subtitle" data-aos="fade-up">
          Cancellation Policy:
        </h3>
        <ul className="maasai-list" data-aos="fade-up">
          {data.payment_and_cancellation.cancellation.map((rule, index) => (
            <li className="maasai-list-item" key={index}>
              {rule}
            </li>
          ))}
        </ul>

        <div className="includes">
          <>
            <div className="inclusions-container">
              <h1 className="maasai-title" data-aos="fade-up">
                Inclusions
              </h1>
              <ul className="maasai-list" data-aos="fade-up">
                {data.inclusions.map((item, index) => (
                  <li className="maasai-list-item" key={index}>
                    <TiTick /> {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="exclusions-container">
              <h1 className="maasai-title" data-aos="fade-up">
                Exclusions
              </h1>
              <ul className="maasai-list" data-aos="fade-up">
                {data.exclusions.map((item, index) => (
                  <li className="maasai-list-item" key={index}>
                    <RxCross2 /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MaasaiMara;
