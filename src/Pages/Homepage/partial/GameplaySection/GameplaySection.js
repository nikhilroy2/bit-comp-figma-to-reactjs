import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Navigation, Pagination } from "swiper";


function GameplaySection(props) {
    return (
        <div id='GameplaySection' className='mt-5'>
            <div className="section_wrapper">
                <div className="section_title">
                    <h2 className="text-center text_4a mb-5 mb-lg-3">
                        GAMEPLAY
                    </h2>
                </div>

                <div className="section_body">

                    <Swiper pagination={true} navigation={true} modules={[Navigation, Pagination]} className="mySwiper">


                       

                        <SwiperSlide>
                            <div className="row">
                                <div className="col-lg-6 text-center">
                                    <img className='w-100 slide_img' src={require('../../../../Static/img/boss_mode.png')} alt="img" />
                                </div>
                                <div className="col-lg-6  section_content text-center text-lg-start px-5 px-lg-2">
                                    <h4 className='text_69'>
                                        Boss mode
                                    </h4>

                                    <p className="section_pera text_69">
                                        The game will have two modes, an automatic mode where 5 heroes will batttle against 1 Boss, and the user can take turns between 3 teams of 5 heroes, totailing.
                                        <br /><br />
                                        After defeating a boss, the user will be directed to another Bos and so on, each Boss will drop an amount of coins that can be accumulated to buy new heroes or other game items.
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
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="row">
                                <div className="col-lg-6 text-center">
                                    <img className='w-100 slide_img' src={require('../../../../Static/img/boss_mode.png')} alt="img" />
                                </div>
                                <div className="col-lg-6  section_content text-center text-lg-start px-5 px-lg-2">
                                    <h4 className='text_69'>
                                        Boss mode
                                    </h4>

                                    <p className="section_pera text_69">
                                        The game will have two modes, an automatic mode where 5 heroes will batttle against 1 Boss, and the user can take turns between 3 teams of 5 heroes, totailing.
                                        <br /><br />
                                        After defeating a boss, the user will be directed to another Bos and so on, each Boss will drop an amount of coins that can be accumulated to buy new heroes or other game items.
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
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="row">
                                <div className="col-lg-6 text-center">
                                    <img className='w-100 slide_img' src={require('../../../../Static/img/boss_mode.png')} alt="img" />
                                </div>
                                <div className="col-lg-6 mb-5  section_content text-center text-lg-start px-5 px-lg-2">
                                    <h4 className='text_69'>
                                        Boss mode
                                    </h4>

                                    <p className="section_pera text_69">
                                        The game will have two modes, an automatic mode where 5 heroes will batttle against 1 Boss, and the user can take turns between 3 teams of 5 heroes, totailing.
                                        <br /><br />
                                        After defeating a boss, the user will be directed to another Bos and so on, each Boss will drop an amount of coins that can be accumulated to buy new heroes or other game items.
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
                        </SwiperSlide>
                    </Swiper>


                </div>
            </div>
        </div>
    );
}

export default GameplaySection;