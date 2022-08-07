import React from "react";
// React Reveal Animation
import Fade from "react-reveal/Fade";
const Dirty = () => {
  return (
    <>
      <section id="dirty" className="specs">
        <div className="specs_container">
          <div className="specs_left">
            <Fade bottom duration={900} delay={1000}>
              <h2>THE FILTHY FIFTY</h2>
              <p>
                DSDC will keep 50 Legendary Drunk Skunks reserved for auction.
                These are the 50 founding members of the Drunk Skunks Drinking
                Club. They started the party that started it all! The Filthy
                fifty will have traits that are unique only to them. They will
                be available for purchase at auction at a later time.
              </p>
            </Fade>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dirty;
