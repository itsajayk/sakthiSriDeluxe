import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Enjoy from './Enjoy';
import Offer from './Offer';
import Review from './Review';

const Home = () => {
    const [arrivalType, setArrivalType] = useState('text');
    const [departureType, setDepartureType] = useState('text');

    return (
        <>
            <Header />
            <div className="jumbotron-container">
                <div className="jumbotron-left">
                    <h2 className="jumbotron-header">
                        Where Comfort Meets Elegance <br /> 
                        
                    </h2>
                    <p>
                        We are focused on providing clients with the highest level <br />
                        of comfort and excellent affordable rates
                    </p>
                    <a href="https://timbu.com/search?query=hotel" className="btn btn-fill btn-large">Book Now</a>
                </div>
                <div className="jumbotron-right">
                    <form action="" className="jumbotron-form">
                        <h3>Scared you can't afford it?</h3>
                        <br />
                        <p>
                            Don't worry, our hotel offers the best <br />
                            affordable rates you can ever find.
                        </p>
                        <label className="hide" htmlFor="arrival">arrival date</label>
                        <input
                            type={arrivalType}
                            id="arrival"
                            name="arrival_date"
                            placeholder="Arrival Date"
                            onFocus={() => setArrivalType('date')}
                        /><br />
                        
                        <label className="hide" htmlFor="departure">departure date</label>
                        <input
                            type={departureType}
                            id="departure"
                            name="departure_date"
                            placeholder="Departure Date"
                            onFocus={() => setDepartureType('date')}
                        /><br />
                        
                        <label className="hide" htmlFor="guests">how many guests</label>
                        <input type="text" id="guests" name="guests" placeholder="Guests" /><br />
                        
                        <label className="hide" htmlFor="children">children</label>
                        <input type="text" id="children" name="children" placeholder="Children" /><br />
                        
                        <button type="button" className="rates">CHECK RATES</button>
                    </form>
                </div>
            </div>
            <Enjoy/>
            <Offer/>
            <Review />
            <Footer />
        </>
    );
};

export default Home;
