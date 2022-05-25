import React from "react";
import "./Homepage.css";
import PrivateSale from "../../Components/PrivateSale/PrivateSale";
import { AboutSection } from "./partial/AboutSection/AboutSection";
import GameplaySection from "./partial/GameplaySection/GameplaySection";
import LaunchpadSection from "./partial/LaunchpadSection/LaunchpadSection";
import NFTS from "./partial/NFTS/NFTS";
import HowToEarn from "./partial/HowToEarn/HowToEarn";
import TokenomicsSection from "./partial/TokenomicsSection/TokenomicsSection";
import Roadmap from "./partial/Roadmap/Roadmap";

import { CountDownStart } from "../../Components/HeaderCountDown/HeaderCountDown";
function Homepage(props) {
  return (
    <div id="Homepage">
      <Section1></Section1>

      <AboutSection></AboutSection>
      <GameplaySection></GameplaySection>1
      <LaunchpadSection></LaunchpadSection>
      <NFTS></NFTS>
      <HowToEarn></HowToEarn>
      <TokenomicsSection></TokenomicsSection>
      <Roadmap></Roadmap>
    </div>
  );
}

export default Homepage;

const Section1 = () => {
  return (
    <div id="Section1">
      <div className="section_wrapper">
        <div className="row justify-content-center justify-content-lg-start">
          <div className="col-12 d-lg-none">
            <div className="nav_sale_content">
              <div className="text-center">
                <strong className="text-white">Private Sale Start In</strong>
                <div className="sale_start_wrapper text-center d-flex justify-content-center">
                  <CountDownStart></CountDownStart>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <h1 className="mb-3 mb-md-5 text-center text-lg-start">BIT COMP</h1>
            <h4 className="mb-3 mb-md-5 text-center text-lg-start">
              BitComp unites investors, players and developers based on
              blockchain technologies. <br />
              <br />
              You can play with your friends, invest in new projects and even
              create your own token and find investors for it.
            </h4>
            <div className="d-flex mt-5 flex-column flex-lg-row flex-wrap align-items-center justify-content-center  ">
              <a href="#" className=" mb-5 me-lg-5 order-2 order-lg-1">
                <img
                  src={require("../../Static/img/google_play.png")}
                  alt="img"
                />
              </a>
              <a href="#" className="mb-5 order-1 order-lg-2">
                <img
                  src={require("../../Static/img/app_store.png")}
                  alt="img"
                />
              </a>
            </div>
          </div>
        </div>

        <PrivateSale></PrivateSale>
      </div>
    </div>
  );
};

