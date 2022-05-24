import React from 'react';

function LaunchpadSection(props) {
    return (
        <div id='LaunchpadSection' className='position-relative'>
            <div className="section_wrapper">
                <div className="section_title mb-5 pb-5">
                    <h2 className="text-center">LAUNCHPAD</h2>
                </div>
            </div>

            <div className="">
                <div className="section_wrapper mb-5 about_game_desc ">
                    <div className="row">
                        <div className="col-md-6">
                            <h4 className="mb-3 mb-md-5 text_5d">LaunchPad description</h4>

                            <p className="section_pera text_5d">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
                    className="section_img_outside img_launchpad"
                    src={require("../../../../Static/img/launchpad.png")}
                    alt="img"
                />
            </div>

        </div>
    );
}

export default LaunchpadSection;