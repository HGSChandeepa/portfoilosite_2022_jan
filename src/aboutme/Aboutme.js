import React from "react";
import "./Aboutme.css";

export default function Aboutme() {
  return (
    <div className="main-container-about">
      <div className="main-container-small-about">
        {/* right side section */}
        <div className="container-main1-about">
          <div className="logo-side">
            <div className="logo"></div>
            <div className="sampletext">
              <h3>H E L L O W O R L D</h3>
            </div>
          </div>
          {/* about me */}
          <div>
            <div className="about-details">
              <h1 className="about-me text">ABOUT ME</h1>
              <h3>Personal Info</h3>
              {/* the line */}
              <span></span>

              <div className="about-container1">
                <h4>
                  I am a UI/UX Designer & Web Developer from Silicon Valley,
                  USA. I am very passionate and dedicated to my work. I have 5
                  years more work experience. And enjoy working in a team or
                  individual.
                </h4>
                <div className="about-grid">
                  <div className="details-flex">
                    <i class="fas fa-angle-double-right"></i>
                    <h4>
                      First Name - <span>Samin</span>
                    </h4>
                  </div>
                  <div className="details-flex">
                    <i class="fas fa-angle-double-right"></i>
                    <h4>
                      First Name - <span>Samin</span>
                    </h4>
                  </div>
                  <div className="details-flex">
                    <i class="fas fa-angle-double-right"></i>
                    <h4>
                      First Name - <span>Samin</span>
                    </h4>
                  </div>
                  <div className="details-flex">
                    <i class="fas fa-angle-double-right"></i>
                    <h4>
                      First Name - <span>Samin</span>
                    </h4>
                  </div>
                  <div className="details-flex">
                    <i class="fas fa-angle-double-right"></i>
                    <h4>
                      First Name - <span>Samin</span>
                    </h4>
                  </div>
                  <div className="details-flex">
                    <i class="fas fa-angle-double-right"></i>
                    <h4>
                      First Name - <span>Samin</span>
                    </h4>
                  </div>
                  <div className="details-flex">
                    <i class="fas fa-angle-double-right"></i>
                    <h4>
                      First Name - <span>Samin</span>
                    </h4>
                  </div>
                  <div className="details-flex">
                    <i class="fas fa-angle-double-right"></i>
                    <h4>
                      First Name - <span>Samin</span>
                    </h4>
                  </div>
                </div>
                <div className="socials">
                  <i class="fab fa-facebook-f"></i>
                  <i class="fab fa-linkedin-in"></i>
                  <i class="fab fa-youtube"></i>
                  <i class="fab fa-twitter"></i>
                </div>
                <div className="about-buttons">
                  <h2 className="buttons">DOWNLOAD CV</h2>
                  <h2 className="buttons">CONTACT ME</h2>
                </div>
              </div>
            </div>
            {/* abuot we */}

            {/* services */}
            <div className="about-details">
              <h3>Services</h3>

              <span></span>

              <div className="services-container">
                <div className="servise">
                  <h4>Service 01</h4>
                  <div className="flex-service">
                    <i class="fas fa-angle-double-right"></i>
                    <h4>Web design</h4>
                  </div>

                  <h4>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Inventore exercitationem.
                  </h4>

                  <h4></h4>
                </div>
                <div className="servise">
                  <h4>Service 01</h4>
                  <div className="flex-service">
                    <i class="fas fa-angle-double-right"></i>
                    <h4>Web design</h4>
                  </div>

                  <h4>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Inventore exercitationem.
                  </h4>

                  <h4></h4>
                </div>
                <div className="servise">
                  <h4>Service 01</h4>
                  <div className="flex-service">
                    <i class="fas fa-angle-double-right"></i>
                    <h4>Web design</h4>
                  </div>

                  <h4>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Inventore exercitationem.
                  </h4>

                  <h4></h4>
                </div>
                <div className="servise">
                  <h4>Service 01</h4>
                  <div className="flex-service">
                    <i class="fas fa-angle-double-right"></i>
                    <h4>Web design</h4>
                  </div>

                  <h4>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Inventore exercitationem.
                  </h4>

                  <h4></h4>
                </div>
              </div>
            </div>
          </div>
          {/* services */}
        </div>
        <div className="details-container">
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
