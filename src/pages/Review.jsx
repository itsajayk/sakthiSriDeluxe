import React from 'react';
import customer1 from '../assets/img/customer1.webp';
import customer2 from '../assets/img/customer2.webp';
import customer3 from '../assets/img/customer3.webp';


const Review = () => {
    return (
        <div className="review-container">
            <div className="review-header">
                <h2 className="review-title">Client Reviews</h2>
                <hr className="horizontal" />
                <p>
                    We are very proud of the services we offer to our customers.
                    <br />
                    Read every word from our happy customers.
                </p>
            </div>

            <div className="cards-container">
                <div className="card">
                    <img src={customer1} alt="Customer 1" />
                    <h2 className="card-title">Narendran</h2>
                    <h3 className="card-subtitle">Chennai.</h3>
                    <p className="card-desc">
                        I travel frequently for work, and this hotel truly stands out. The location is unbeatable,
                        the staff is incredibly courteous, and the room service is prompt and professional. The
                        24/7 hot water, seamless power backup, and spotless rooms made my stay absolutely
                        comfortable. It felt like a home away from home!                    </p>
                </div>

                <div className="card">
                    <img src={customer2} alt="Customer 2" />
                    <h2 className="card-title">Suganthan</h2>
                    <h3 className="card-subtitle">Chennai.</h3>
                    <p className="card-desc">
                        We stayed here during our family vacation and were truly impressed. Spacious AC
                        rooms, in-built parking, and friendly service made everything stress-free. The kids loved
                        how clean and cozy everything was, and we loved the peace of mind that came with the
                        reliable power backup and round-the-clock staff support. Highly recommended!
                    </p>
                </div>

                {/* <div className="card">
                    <img src={customer3} alt="Customer 3" />
                    <h2 className="card-title">Fayemi David</h2>
                    <h3 className="card-subtitle">Lagos, Nigeria.</h3>
                    <p className="card-desc">
                        My Family and I are very happy when we lodge into Hotel Sri Sakthi Deluxe. They are by far the best in the universe.
                    </p>
                </div> */}
            </div>
        </div>
    );
};

export default Review;
