import React from "react";
// React Reveal Animation
import Fade from "react-reveal/Fade";
const StinkCoin = () => {
  return (
    <>
      <section id="dirty" className="specs">
        <div className="specs_container">
          <div className="specs_left">
            <Fade bottom duration={900} delay={1000}>
              <h2>$STINK COIN 🦨</h2>
              <p>
                DSDC NFT's get you exclusive membership into the Drunk Skunks
                Drinking Club! Stake your Skunks and earn $STINK, and receive
                profit sharing from the bars and beer line! Pay with $STINK, and
                stake your $STINK to earn a staking multiplier. DSDC members
                will have unvelievable access to members only events, drinking
                competitions, and merch. Join the Drunk Skunks Drinking Club
                today!
              </p>
            </Fade>
          </div>
        </div>
      </section>
    </>
  );
};

export default StinkCoin;
