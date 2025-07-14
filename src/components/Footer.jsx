import React from 'react';
import mapPinIcon from '../assets/img/map-pin.svg';
import phoneIcon from '../assets/img/phone.svg';
import mailIcon from '../assets/img/mail.svg';
import facebookIcon from '../assets/img/facebook.svg';
import twitterIcon from '../assets/img/twitter.svg';
import instagramIcon from '../assets/img/instagram.svg';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <nav className="footer-nav">
                    <div className="footer-description">
                        <h3 className="footer-description-title">Hotel Sri Sakthi Deluxe</h3>
                        <p>Where Comfort Meets Elegance</p>
                    </div>
                    <div className="footer-contact-us">
                        <h3 className="footer-description-title">Contact Us</h3>
                        <p className="footer-description-detail"> 
                            <img src={mapPinIcon} className="footer-description-icon" alt="Hotel Sri Sakthi Deluxe location" />
                            <span>90, 91, 92, Behind New Bus Stand, Chinnery Vayal Kadu, Pallappatti, Salem - 636 009</span>
                        </p>
                        <p className="footer-description-detail">
                            <img src={phoneIcon} className="footer-description-icon" alt="Hotel Sri Sakthi Deluxe phone number" /> 
                            <span>0427-3510200</span>
                        </p>
                        <p className="footer-description-detail">
                            <img src={mailIcon} className="footer-description-icon" alt="Hotel Sri Sakthi Deluxe email" />
                            <span>hotelsrisakthideluxe@gmail.com</span>
                        </p>
                    </div>
                    <div className="footer-follow-us">
                        <h3 className="footer-description-title">Follow Us</h3>
                        <ul className="footer-follow-us-lists">
                            <li className="follow-us-list">
                                <a href="">
                                    <img src={facebookIcon} alt="Hotel Sri Sakthi Deluxe facebook page" />
                                </a>
                            </li>
                            <li className="follow-us-list">
                                <a href="">
                                    <img src={twitterIcon} alt="Hotel Sri Sakthi Deluxe twitter page" />
                                </a>
                            </li>
                            <li className="follow-us-list">
                                <a href="">
                                    <img src={instagramIcon} alt="Hotel Sri Sakthi Deluxe instagram page" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;
