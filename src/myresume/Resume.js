import React from "react";
import "./Resume.css";

export default function Resume() {
  return (
    <div>
      <div className="main-container-resume">
        {/* details position */}
        <div className="resume-container1">
          <div className="resume-left">
            <span className="logo"></span>
            <span className="text"></span>
          </div>

          <div className="resume-right">
            <h3>Skills</h3>
            <span></span>
            <div className="skill-section">
              {/* soft skills */}
              <div className="soft-skills">
                <h3>Soft SKILLS</h3>
                <div className="skill-sections">
                  <div className="skill-card">
                    <div className="icon-text">
                      <i class="fas fa-id-card"></i>
                      <h4>Leadership</h4>
                    </div>
                    <div className="percentage">
                      <h4>10%</h4>
                    </div>
                    <div className="process"></div>
                  </div>
                  <div className="skill-card">
                    <div className="icon-text">
                      <i class="fas fa-id-card"></i>
                      <h4>Leadership</h4>
                    </div>
                    <div className="percentage">
                      <h4>10%</h4>
                    </div>
                    <div className="process"></div>
                  </div>
                  <div className="skill-card">
                    <div className="icon-text">
                      <i class="fas fa-id-card"></i>
                      <h4>Leadership</h4>
                    </div>
                    <div className="percentage">
                      <h4>10%</h4>
                    </div>
                    <div className="process"></div>
                  </div>
                  <div className="skill-card">
                    <div className="icon-text">
                      <i class="fas fa-id-card"></i>
                      <h4>Leadership</h4>
                    </div>
                    <div className="percentage">
                      <h4>10%</h4>
                    </div>
                    <div className="process"></div>
                  </div>
                </div>
              </div>
              {/* soft skills */}

              {/* hard skills */}

              <div className="hard-skills">
                <h3>Hard SKILLS</h3>
                <div className="skill-sections">
                  <div className="skill-card">
                    <div className="icon-text">
                      <i class="fas fa-id-card"></i>
                      <h4>Leadership</h4>
                    </div>
                    <div className="percentage">
                      <h4>10%</h4>
                    </div>
                    <div className="process"></div>
                  </div>
                </div>
              </div>
              {/* hard skills */}
            </div>
          </div>
        </div>
        {/* details position */}

        {/* images sectionC */}
        <div className="resume-container2"></div>

        {/* details position */}
      </div>
    </div>
  );
}
