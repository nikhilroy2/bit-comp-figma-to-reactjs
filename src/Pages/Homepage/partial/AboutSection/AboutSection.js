export const AboutSection = () => {
    return (
        <div id="AboutSection" className="mt-5">
            <div className="section_wrapper mb-5">
                <div className="section_title mb-4 mb-lg-5 pb-2 pb-lg-5">
                    <h2 className="text-center">ABOUT</h2>
                </div>
                <div className="section_body">
                    <div className="row g-3 g-md-5">
                        <div className="col-lg-6">
                            <div className="col_wrapper">
                                <div className="row g-5">
                                    <div className="col-md-10 text-center text-lg-start mb-5">
                                        <h4 className="mb-3 mb-md-5">BCOMP Token</h4>

                                        <p className="section_pera text-white">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                            seddo eiusmod tempor incididunt ut labore et dolore magna
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
                        <div className="col-lg-6">
                            <div className="col_wrapper">
                                <div className="row justify-content-center justify-content-lg-stretch">
                                    <div className="col-md-10 text-center text-lg-start">
                                        <h4 className="mb-3 mb-md-5 text_5d ">
                                            Project description
                                        </h4>

                                        <p className="section_pera text_5d">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                            sed do eiusmod tempor incididunt ut labore et dolore magna
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
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="project_desk_wrapper">
                        <div className="section_wrapper mb-lg-5 about_game_desc ">
                            <div className="row ">
                                <div className="col-md-10 col-lg-6 text-center text-lg-start">
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

                                    <div className="btn_control mt-3 mt-md-5 text-start">
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
                            className="section_img_outside mt-n5 mt-lg-0 d-block"
                            src={require("../../../../Static/img/pngwing.png")}
                            alt="img"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
