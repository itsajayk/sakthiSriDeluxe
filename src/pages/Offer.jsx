import React from 'react';
import hotel1 from '../assets/img/1.jpg';
import hotel2 from '../assets/img/hotel-2.webp';
import hotel3 from '../assets/img/3.jpg';
import hotel4Large from '../assets/img/2.jpg';
import hotel5 from '../assets/img/5.jpg';
import hotel6 from '../assets/img/6.jpg';
import checkIcon from '../assets/img/check-square.svg';

const Offer = () => {
    return (
        <section className="special-offers">
            {/* Top Text */}
            <div className="page-header-container">
                <h2 className="page-header">
                    Simplicity is the ultimate <br /> Watchword
                </h2>
            </div>

            <div className="row center-lg">
                {/* Left Column: Images */}
                <div className="col image-col right-marg">
                    <img src={hotel1} alt="room-image" className="small-image" />
                    <img src={hotel2} alt="room-image" className="small-image" />
                    <img src={hotel3} alt="room-image" className="small-image img-hide" />

                    <div className="side-by-side-container">
                        <div className="large-image-container">
                            <img src={hotel4Large} alt="room-image-large" className="large-image" />
                        </div>
                        <section className="stacked-image-container">
                            <div><img src={hotel5} alt="room-image" className="small-image" /></div>
                            <div><img src={hotel6} alt="room-image" className="small-image" /></div>
                        </section>
                    </div>
                </div>

                {/* Right Column: Text and List */}
                <div className="col">
                    <p className="offers-sub-title">
                        The fact that we are run by hospitality professionals<br />
                        and equipped with the world's best interior designers<br />
                        is why our rooms and suites are second to none<br />
                        in the universe.
                    </p>

                    <ul className="offers-list">
                        <li>
                            <div>
                                <img src={checkIcon} alt="tick" className="list-icon" />
                                <p className="list-text">Deluxe Room A/c</p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <img src={checkIcon} alt="tick" className="list-icon" />
                                <p className="list-text">Deluxe Room Non A/c</p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <img src={checkIcon} alt="tick" className="list-icon" />
                                <p className="list-text">King Suite</p>
                            </div>
                        </li>
                    </ul>

                    <a href="https://timbu.com/search?query=hotel" className="btn btn-fill btn-large centered">
                        Book Now
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Offer;
