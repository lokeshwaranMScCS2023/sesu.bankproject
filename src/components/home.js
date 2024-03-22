import React from "react";
import "./home.css";
import card1 from "./gold-loan2.jpg";
import card2 from "./fd.jpg";
import card3 from "./ed.jpg";
import tad from "./wel3.jpg";
import td from "./vs.jpg";
import the from "./ct.jpg";

function Home() {
  const backgroundImageStyle1 = {
    backgroundImage: `url(${tad})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "400px",
    position: "relative",
  };

  const backgroundImageStyle2 = {
    backgroundImage: `url(${the})`,
    backgroundPosition: "center",
    minHeight: "400px",
    position: "relative",
  };

  return (
    <div>
      <div style={backgroundImageStyle1} className="container2">
        <div className="text-center">
          <h2 className="text-white">
            <span>P </span>romoting the good of the people of India by maintaining monetary and financial stability.
          </h2>
        </div>
      </div>

      <div className="container6" id="visionMissionSection">
        <div className="right-box">
          <img src={td} alt="Vision and Mission" />
        </div>
        <div className="vision">
          <h2>Our Vision and Mission</h2>
          <h3>Vision:</h3>
          <p>To create a world free of poverty on a livable planet.</p>
          <h3>Mission:</h3>
          <p>To end extreme poverty and boost prosperity on a livable planet.</p>
        </div>
      </div>

      <section id="project">
        <div className="container5">
          <h2>Services</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="card shadow-lg">
                <img className="card-img-top" src={card1} alt="Interactive E-Learning System" />
                <div className="card-body">
                  <p className="card-text">Gold Loan</p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card">
                <img className="card-img-top" src={card2} alt="Online Banking System" />
                <div className="card-body">
                  <p className="card-text">Fixed Deposit</p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card">
                <img className="card-img-top" src={card3} alt="New Project" />
                <div className="card-body">
                  <p className="card-text">Education Loan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

<section id="contact">
  <div style={{ display: "flex" }}>
    <div className="left-image">
      <img src={the} alt="Contact" />
    </div>
    <div>
      <h1>Contact...</h1>
      <p>
        <a href="mailto:pgcssesu@gmail.com">Email: pgcssesu@gmail.com</a>
        <br />
        <a href="tel:6385258142">Call us: 6385258142</a>
      </p>
    </div>
  </div>
</section>


    </div>
  );
}

export default Home;
