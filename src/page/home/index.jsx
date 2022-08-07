import React, { useLayoutEffect } from "react";
import "./style.css";
// Layout
import Header from "../../layout/Header/Header";
import Footer from "../../layout/Footer/Footer";
// Components
import Banner from "./Banner";
import Welcome from "./Welcome";
import About from "./About";
import Specs from "./Specs";
import Roadmap from "./Roadmap";
import Team from "./Team";
import BuySkull from "./BuySkull";
import Dirty from "./Dirty";
import Toxic from "./Toxic";
import StinkCoin from "./StinkCoin";
const Home = (props) => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="main_wrapper">
        <Header setShow={props.setShow} />
        <Banner />
        <Welcome />
        <BuySkull />
        <About />
        <Specs />
        <Dirty />
        <StinkCoin />
        <Toxic />
        <Roadmap />
        <Team />
      </div>
      <Footer />
    </>
  );
};

export default Home;
