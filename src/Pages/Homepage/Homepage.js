import React from "react";
import "./Homepage.css";
import PrivateSale from "../../Components/PrivateSale/PrivateSale";
function Homepage(props) {
  return (
    <div id="Homepage">
      <Section1></Section1>

      <AboutSection></AboutSection>
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

const AboutSection = () => {
  return (
    <div id="AboutSection" className="mt-5">
      <div className="section_wrapper mb-5">
        <div className="section_title mb-5 pb-5">
          <h2 className="text-center">ABOUT</h2>
        </div>
        <div className="section_body">
          <div className="row g-3 g-md-5">
            <div className="col-md-6">
              <div className="col_wrapper">
                <div className="row">
                  <div className="col-md-10">
                    <h4 className="mb-3 mb-md-5">BCOMP Token</h4>

                    <p className="section_pera text-white">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>

                    <div className="btn_control mt-3 mt-md-5">
                      <a
                        href="#"
                        className="btn_frame section_frame_btn me-3 me-md-5"
                      >
                        BUY TOKEN
                      </a>

                      <a href="#" className="btn_frame section_frame_btn">
                        BUY NFT
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="col_wrapper">
                <div className="row">
                  <div className="col-md-10">
                    <h4 className="mb-3 mb-md-5 text_5d">
                      Project description
                    </h4>

                    <p className="section_pera text_5d">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed  do eiusmod tempor incididunt ut labore et dolore
                      magna aliqua. Ut enim ad minim veniam, quis nostrud
                      exercitation ullamco laboris nisi ut aliquip ex ea commodo
                      consequat. Duis aute irure dolor in reprehenderit in
                      voluptate velit esse cillum dolore eu fugiat nulla
                      pariatur. Excepteur sint occaecat cupidatat non proident,
                      sunt in culpa qui officia deserunt mollit anim id est
                      laborum.
                    </p>

                    <div className="btn_control mt-3 mt-md-5">
                      <a
                        href="#"
                        className="btn_frame section_frame_btn me-3 me-md-5"
                      >
                        BUY TOKEN
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="section_wrapper mb-5 about_game_desc ">
              <div className="row">
                <div className="col-md-6">
                  <h4 className="mb-3 mb-md-5 text_5d">Project description</h4>

                  <p className="section_pera text_5d">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                     do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>

                  <div className="btn_control mt-3 mt-md-5">
                    <a
                      href="#"
                      className="btn_frame section_frame_btn me-3 me-md-5"
                    >
                      details
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <img
              className="about_game_img"
              src={require("../../Static/img/pngwing.png")}
              alt="img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
