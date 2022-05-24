import React from "react";
import "./Homepage.css";
import PrivateSale from "../../Components/PrivateSale/PrivateSale";
import { AboutSection } from "./partial/AboutSection/AboutSection";
import GameplaySection from "./partial/GameplaySection/GameplaySection";
function Homepage(props) {
  return (
    <div id="Homepage">
      <Section1></Section1>

      <AboutSection></AboutSection>
      <GameplaySection></GameplaySection>
    </div>
  );
}

export default Homepage;

const Section1 = () => {
  return (
    <div id="Section1">
      <div className="section_wrapper">
        <div className="row">
          <div className="col-md-7">
            <h1 className="mb-3 mb-md-5">BIT COMP</h1>
            <h4 className="mb-3 mb-md-5">
              BitComp unites investors, players and developers based on
              blockchain technologies. <br />
              <br />
              You can play with your friends, invest in new projects and even
              create your own token and find investors for it.
            </h4>
            <div className="d-flex flex-wrap align-items-center justify-content-center  ">
              <a href="#" className="me-3 me-md-5">
                <img
                  src={require("../../Static/img/google_play.png")}
                  alt="img"
                />
              </a>
              <a href="#">
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

