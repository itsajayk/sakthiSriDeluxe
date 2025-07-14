import React from 'react';
import '../assets/css/global-header.css';
import '../assets/css/global-footer.css';
import '../assets/css/facilities.css';

import Header from '../components/Header';
import Footer from '../components/Footer';

// Image imports
import telephoneImg from '../assets/img/telephone.webp';
import checkSquare from '../assets/img/check-square.svg';
import gymImg from '../assets/img/gymnasium.webp';
import helipadImg from '../assets/img/helipad.webp';
import restaurantsImg from '../assets/img/restaurants.webp';
import swimmingPoolImg from '../assets/img/swimming_pool.webp';

const Facilities = () => {
  return (
    <>
      <Header />
      <main>
        <div className="container">
          {/* Top Text */}
          <div className="page-header-container">
            <h2 className="page-header">Hotel Sri Sakthi Deluxe Facilities</h2>
            <p className="page-sub-header">
              Get the most of our hotel facilities. Enjoy the state of <br /> the art facilities in our hotel
            </p>
          </div>

          {/* Upper Section */}
          <section className="upper-section">
            <div className="row center-lg">
              <div className="col image-col right-marg">
                <div className="large-image-container">
                  <img src={telephoneImg} alt="room-image-large" className="large-image" />
                </div>
              </div>

              {/* Top Right Text */}
              <div className="col">
                <h3 className="right-title">
                  Access to 24hr Digital <br /> Telephone Services
                </h3>
                <p>
                  With our feature rich Digital telephone services, you <br />
                  will have the flexibility you have always wanted with <br />
                  voice communication from your home or business.
                </p>
                <br />
                <h3>More Details</h3>
                <ul className="facilities-list">
                  <li>
                    <div>
                      <img src={checkSquare} alt="tick" className="list-icon" />
                      <p className="list-text">Unlimited Long Distance</p>
                    </div>
                  </li>
                  <li>
                    <div>
                      <img src={checkSquare} alt="tick" className="list-icon" />
                      <p className="list-text">Caller ID</p>
                    </div>
                  </li>
                  <li>
                    <div>
                      <img src={checkSquare} alt="tick" className="list-icon" />
                      <p className="list-text">Caller Waiting</p>
                    </div>
                  </li>
                </ul>
                <a href="#" className="btn btn-fill btn-large">View More</a>
              </div>
            </div>
          </section>

          {/* Other Facilities Section */}
          <div className="up">
            <h2 className="page-header">Other Facilities</h2>
          {/* Facilities Gallery */}
          <div className="">
            <div className="containera">
              <div className="gallery">
                <div className="gallery-item">
                  <img className="gallery-image" src={gymImg} alt="gym" />
                  <h4>GYMNASIUM</h4>
                  <p className="imggrid">
                    We have the most equipped gymnasium in the country with an instructor always available.
                  </p>
                </div>

                <div className="gallery-item">
                  <img className="gallery-image" src={helipadImg} alt="helipad" />
                  <h4>HELIPAD</h4>
                  <p className="imggrid">
                    Access to the state of the art helipad coupled with pilots with over ten years experience.
                  </p>
                </div>

                <div className="gallery-item">
                  <img className="gallery-image" src={restaurantsImg} alt="restaurants" />
                  <h4>RESTAURANTS</h4>
                  <p className="imggrid">
                    We have the best local and intercontinental dishes you have ever tasted before in our hotel.
                  </p>
                </div>

                <div className="gallery-item">
                  <img className="gallery-image" src={swimmingPoolImg} alt="swim" />
                  <h4>SWIMMING POOLS</h4>
                  <p className="imggrid">
                    We have the best equipped swimming pool in the country with an instructor waiting to guide you.
                  </p>
                </div>
              </div>
            </div>
          </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
};

export default Facilities;
