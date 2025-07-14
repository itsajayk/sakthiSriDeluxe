import React from 'react';
import clockIcon from '../assets/img/clock.svg';
import databaseIcon from '../assets/img/database.svg';
import coffeeIcon from '../assets/img/coffee.svg';
import wifiIcon from '../assets/img/wifi.svg';
import playIcon from '../assets/img/ant-design_play-circle-filled.svg';
import videoThumbnail from '../assets/img/Video.webp';


const Enjoy = () => {
    return (
        <>
            <div className="enjoy-container">
                <div className="enjoy-header">
                    <h2 className="enjoy-heading">
                        Enjoy your stay <br /> at our hotel
                    </h2>
                    <hr className="horizontal" />
                    <p>
                        We are more than being a hotel because we are able <br />
                        to combine the quality standard of a hotel with the <br />
                        advantages of an apartment.
                    </p>
                </div>
                <div className="enjoy-services">
                    <div className="first-col">
                        <div className="upper">
                            <span>
                                <img src={clockIcon} alt="clock icon" />
                            </span>
                            <h3>24 hours Room Service</h3>
                            <p>
                                You have access to 24-hours a day room service at our hotel.
                            </p>
                        </div>
                        <div className="lower">
                            <span>
                                <img src={databaseIcon} alt="fitness icon" />

                            </span>
                            <h3>In-built Car parking</h3>
                            <p>
                                Park with ease in our secure in-built facility. Spacious and hassle-free, it offers comfort and peace of 
                                mind with easy access throughout your stay.
                            </p>
                        </div>
                    </div>
                    <div className="sec-col">
                        <div className="upper">
                            <span>
                                <img src={coffeeIcon} alt="coffee icon" />

                            </span>
                            <h3>24/7 Instant Hot Water</h3>
                            <p>
                                Refresh anytime with 24/7 hot water access—day or night. Experience the comfort and convenience you deserve, 
                                guaranteed throughout your stay.
                            </p>
                        </div>
                        <div className="lower">
                            <span>
                                <img src={wifiIcon} alt="wifi icon" />

                            </span>
                            <h3>Free Wi-Fi Access</h3>
                            <p>
                                You have access to 24-hours free Wi-Fi services irrespective of
                                any room.
                            </p>
                        </div>
                    </div>
                    <div className="third-col cont">
                        <img src={playIcon} alt="video play icon" />

                        <img src={videoThumbnail} alt="woman in swimming pool" />

                    </div>
                </div>
            </div>
        </>
    );
};

export default Enjoy;
