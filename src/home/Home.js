import React from "react";
import "./Home.css";

import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="main-container">
      <div className="main-container-small">
        {/* right side section */}
        <div className="container-main1">
          <div className="logo-side">
            <div className="logo"></div>
            <div className="sampletext">
              <h3>H E L L O W O R L D</h3>
            </div>
          </div>
          <div className="cards-side">
            <div className="name">
              <h1>I'M SAMIN CHANDEEPA</h1>
              <h4>web designer</h4>
            </div>

            {/* cards */}
            <div className="cards">
              <Link to="/aboutme" className="link-home">
                <div className="card-container">
                  <i class="fas fa-id-card"></i>
                  <h2>
                    ABOUT <span>ME</span>{" "}
                  </h2>
                </div>
              </Link>
              <Link to="/resume" className="link-home">
                <div className="card-container">
                  <i class="fas fa-id-card"></i>
                  <h2>
                    MY <span>RESUME</span>{" "}
                  </h2>
                </div>
              </Link>
              <Link to="/portfolio" className="link-home">
                <div className="card-container">
                  <i class="fas fa-id-card"></i>
                  <h2>
                    MY <span>PORTFOILO</span>{" "}
                  </h2>
                </div>
              </Link>
              <Link to="/contact" className="link-home">
                <div className="card-container">
                  <i class="fas fa-id-card"></i>
                  <h2>
                    CONTACT <span>ME</span>{" "}
                  </h2>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="container-main2">
          <div>
            <img
              src={require("../assets/me.png")}
              className="image-mine"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
