import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../assets/css/global-header.css';
import '../assets/css/global-footer.css';
import '../assets/css/accesibility.css';
import '../assets/css/contact-page.css';

// Background images
import bgMain from '../assets/img/Rectangle 75.webp';
import bgInfo from '../assets/img/Rectangle 57.webp';

// Icons
import { FaMapMarker, FaPhone, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
    return (
        <>
        <Header />
        <main>
            <div className="container">
            {/* Header part */}
            <div className="header">
                <h2>Contact Us</h2>
                <hr />
                <p>
                Interested in striking a partnership or do you have any complaint or
                feedback? Fill the form below.
                </p>
            </div>

            {/* Main with form and contact-info */}
            <div
                className="main"
                style={{
                background: `linear-gradient(rgba(0,0,0,0.68),rgba(0,0,0,0.68)), url(${bgMain})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                height: '959px',
                marginBottom: '6rem'
                }}
            >
                <div className="contact">
                {/* Form */}
                <div className="contact-form">
                    <form>
                    <div className="contact-detail">
                        <label className="hide" htmlFor="name">Name</label>
                        <input
                        type="text"
                        id="name"
                        className="form-control"
                        placeholder="Name"
                        />
                        <label className="hide" htmlFor="email">Email</label>
                        <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        />
                    </div>
                    <label className="hide" htmlFor="message">Message</label>
                    <textarea
                        id="comment"
                        name="message"
                        className="form-control"
                        placeholder="Message"
                        style={{ resize: 'none', width: '100%' }}
                    ></textarea>

                    <button type="submit" className="btn">
                        SEND MESSAGE
                    </button>
                    </form>
                </div>

                {/* Contact Info */}
                <div
                    className="contact-us"
                    style={{
                    background: `linear-gradient(rgba(0,0,0,0.68),rgba(0,0,0,0.68)), url(${bgInfo})`,
                    backgroundPosition: 'center top'
                    }}
                >
                    <h3>Contact Us</h3>
                    <p>
                    <FaMapMarker style={{ fontSize: '1.5rem', marginRight: '8px' }} />
                    23, Fola Osibo, Lekki Phase 1
                    </p>
                    <p>
                    <FaPhone style={{ fontSize: '1.5rem', marginRight: '8px' }} />
                    08185956620
                    </p>
                    <p>
                    <FaEnvelope style={{ fontSize: '1.5rem', marginRight: '8px' }} />
                    Support@starhotels.com
                    </p>
                </div>
                </div>
            </div>
            </div>
        </main>
        <Footer />
        </>
    );
};

export default Contact;
