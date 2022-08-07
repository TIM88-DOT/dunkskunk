import React from "react";
// Assets
import team_img1 from "../../assets/images/team_img1.png";
import team_img2 from "../../assets/images/team_img2.jpeg";
import team_img3 from "../../assets/images/team_img3.jpeg";
// React Reveal Animation
import Fade from "react-reveal/Fade";

const Team = () => {
  return (
    <>
      <div id="team" className="team">
        <Fade top duration={900} delay={910}>
          <h1>THE TEAM</h1>
        </Fade>
        <div className="team_container">
          <div className="team_card">
            <div className="team_content">
              <h2>RANDY</h2>
              <p>
                Probably playing a drinking game right now, prefers frosty
                beverages
              </p>
              <img src={team_img3} alt="..." />
            </div>
          </div>
          <div className="team_card">
            <div className="team_content">
              <h2>JAY</h2>
              <p>Here for the party, woke up with a poptart stuck to his leg</p>
              <img src={team_img2} alt="..." />
            </div>
          </div>
          <div className="team_card">
            <div className="team_content">
              <h2>LOU</h2>
              <p>Beer funnel prepped, ready for takeoff</p>
              <img src={team_img1} alt="..." />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
