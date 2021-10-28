import React from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const { serviceId } = useParams();
    return (
        <div>
            <div className="d-flex justify-content-center align-items-center">
                <div>
                    <h2>Your Booking id {serviceId}</h2>
                    <p>Developer is Sleeping When he was wake up page will be looks like more pretty.</p>
                </div>
            </div>
        </div>
    );
};

export default Booking;