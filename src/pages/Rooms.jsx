import React, { useEffect } from "react";
import hotel1 from '../assets/img/1.webp';
import hotel2 from '../assets/img/hotel-2.webp';
import hotel3 from '../assets/img/3.webp';
import hotel4 from '../assets/img/2.webp';
import hotel5 from '../assets/img/5.webp';
import hotel6 from '../assets/img/6.webp';
import checkIcon from "../assets/img/check-square.svg";
import bedIcon from "../assets/img/bed.png";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../assets/css/rooms-and-suites.css";
import '../assets/css/global-header.css';
import '../assets/css/global-footer.css';

const Rooms = () => {
    useEffect(() => {
        const standard = document.getElementById("standard-room");
        const exec = document.getElementById("executive-room");
        const king = document.getElementById("king-room");
        const handleClick = (el) => {
        [standard, exec, king].forEach((item) =>
            item.classList.remove("active-header")
        );
        el.classList.add("active-header");
        };
        standard.addEventListener("click", () => handleClick(standard));
        exec.addEventListener("click", () => handleClick(exec));
        king.addEventListener("click", () => handleClick(king));

        return () => {
        standard.removeEventListener("click", () => handleClick(standard));
        exec.removeEventListener("click", () => handleClick(exec));
        king.removeEventListener("click", () => handleClick(king));
        };
    }, []);

    return (
        <>
        <Header />
        <main>
            <div className="container">
            {/* Top Text */}
            <div className="page-header-container">
                <h1 className="page-header">Hotel Sri Sakthi Deluxe Rooms</h1>
                <p className="page-sub-header">
                    Get the most of our hotel specials. Enjoy the modern <br/>
                    comfort and panoramic view
                </p>
            </div>

            {/* Special offers section */}
            <section className="special-offers">
                <div className="row center-lg">
                <div className="col image-col right-marg">
                    <img src={hotel1} alt="room-image" className="small-image" />
                    <img src={hotel2} alt="room-image" className="small-image" />
                    <img src={hotel3} alt="room-image" className="small-image" />
                    <div className="side-by-side-container">
                    <div className="large-image-container">
                        <img
                        src={hotel4}
                        alt="room-image-large"
                        className="large-image"
                        />
                    </div>
                    <section className="stacked-image-container">
                        <div>
                        <img
                            src={hotel5}
                            alt="room-image"
                            className="small-image"
                        />
                        </div>
                        <div>
                        <img
                            src={hotel6}
                            alt="room-image"
                            className="small-image"
                        />
                        </div>
                    </section>
                    </div>
                </div>
                <div className="col">
                    <h3 className="offers-title">Special Offers</h3>
                    <p className="offers-sub-title">
                    Get 10% discount off this city view- standard room. <br />
                    Offers valid till June 31st 2025
                    </p>
                    <ul className="offers-list">
                    {[
                        "Free Wi-Fi Service",
                        "Best Rate Guarantee",
                        "In-Room Services",
                    ].map((text, idx) => (
                        <li key={idx}>
                        <div>
                            <img src={checkIcon} alt="tick" className="list-icon" />
                            <p className="list-text">{text}</p>
                        </div>
                        </li>
                    ))}
                    </ul>
                    <a href="#" className="btn btn-fill btn-large">
                    View More
                    </a>
                </div>
                </div>
            </section>

            {/* Rooms */}
            <section className="rooms-section">
                <div className="row room-section-header-container">
                <div className="col col-3">
                    <h4
                    className="room-section-header active-header"
                    id="standard-room"
                    >
                    Deluxe Room A/c
                    </h4>
                </div>
                <div className="col col-3">
                    <h4 className="room-section-header" id="executive-room">
                    Deluxe Room Non A/c
                    </h4>
                </div>
                <div className="col col-3">
                    <h4 className="room-section-header" id="king-room">
                    King Suites
                    </h4>
                </div>
                </div>

                <div className="row center-lg">
                {[
                    {
                    img: hotel1,
                    price: "1800 Per Night",
                    bedIcon: checkIcon,
                },
                {
                    img: hotel5,
                    price: "1100 Per Night",
                    bedIcon: bedIcon,
                },
                {
                    img: hotel3,
                    price: "1800 Per Night",
                    bedIcon: bedIcon,
                },
                {
                    img: hotel4,
                    price: "1100 Per Night",
                    bedIcon: bedIcon,
                },
                ].map((room, idx) => (
                    <div className="rooms col col-2" key={idx}>
                    <img src={room.img} alt="Room" className="large-image" />
                    <h3 className="room-title">Standard Deluxe A/c</h3>
                    <p className="room-text">
                        Designed specifically for Practicality and <br /> comfort
                    </p>
                    <div>
                        <div className="details-container">
                        <img src={checkIcon} alt="tick" className="list-icon" />
                        <p className="list-text">1 Persons</p>
                        <p className="list-text">Extra Person A/c 300</p>
                        </div>
                        <div className="details-container">
                        <img src={room.bedIcon} alt="bed" className="list-icon" />
                        <p className="list-text">1 Kingsize bed</p>
                        </div>
                    </div>
                    <p className="amount-text">{room.price}</p>
                    <div className="buttons-container">
                        <a href="#" className="btn btn-ghost">
                        View More
                        </a>
                        <a
                        href="https://timbu.com/search?query=hotel"
                        className="btn btn-fill"
                        >
                        Book Now
                        </a>
                    </div>
                    </div>
                ))}
                </div>
            </section>
            </div>
        </main>
        <Footer />
        </>
    );
};

export default Rooms;
