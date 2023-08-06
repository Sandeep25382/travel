import React, { useEffect } from "react";
import "./main.css";
import img1 from "../../Assets/img1.jpg";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineClipboardCheck } from "react-icons/hi";
import Aos from "aos";
import "aos/dist/aos.css";

const Main = () => {
  const DATA = [
    {
      id: 1,
      imgSrc: img1,
      destTitle: "Bora Bora",
      location: "new Zeland",
      grade: "CULTURAL RELAX",
      fees: "$700",
      description:
        "Bora-Bora is formed by an extinct volcano, surrounded by a lagoon and a fringing reef. Its summit is Mount Otemanu located in the center of the atoll",
    },
    {
      id: 1,
      imgSrc: img1,
      destTitle: "Bora Bora",
      location: "new Zeland",
      grade: "CULTURAL RELAX",
      fees: "$700",
      description:
        "Bora-Bora is formed by an extinct volcano, surrounded by a lagoon and a fringing reef. Its summit is Mount Otemanu located in the center of the atoll",
    },
    {
      id: 1,
      imgSrc: img1,
      destTitle: "Bora Bora",
      location: "new Zeland",
      grade: "CULTURAL RELAX",
      fees: "$700",
      description:
        "Bora-Bora is formed by an extinct volcano, surrounded by a lagoon and a fringing reef. Its summit is Mount Otemanu located in the center of the atoll",
    },
    {
      id: 1,
      imgSrc: img1,
      destTitle: "Bora Bora",
      location: "new Zeland",
      grade: "CULTURAL RELAX",
      fees: "$700",
      description:
        "Bora-Bora is formed by an extinct volcano, surrounded by a lagoon and a fringing reef. Its summit is Mount Otemanu located in the center of the atoll",
    },
    {
      id: 1,
      imgSrc: img1,
      destTitle: "Bora Bora",
      location: "new Zeland",
      grade: "CULTURAL RELAX",
      fees: "$700",
      description:
        "Bora-Bora is formed by an extinct volcano, surrounded by a lagoon and a fringing reef. Its summit is Mount Otemanu located in the center of the atoll",
    },
  ];

  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 data-aos="fade-right"   className="title">Most viewed destinantion</h3>
      </div>
      <div className="secContent grid">
        {DATA.map((item, index) => {
          return (
            <div key={item.id} data-aos="fade-up" className="singleDestination">
              <div className="imageDiv">
                <img src={item.imgSrc} alt={item.destTitle} />
              </div>
              <div className="cardInfo">
                <h4 className="destTitle">{item.destTitle}</h4>
                <span className="continent flex">
                  <HiOutlineLocationMarker className="icon" />
                  <span className="name">{item.location}</span>
                </span>
                <div className="fees flex">
                  <div className="grade">
                    <span>
                      {item.grade}
                      <small>+1</small>
                    </span>
                  </div>
                  <div className="price">
                    <h5>{item.fees}</h5>
                  </div>
                </div>
                <div className="desc">
                  <p>{item.description}</p>
                </div>
                <button className="btn flex">
                  DETAILS
                  <HiOutlineClipboardCheck className="icon" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default Main;
