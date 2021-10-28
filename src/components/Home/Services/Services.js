import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://aqueous-caverns-12891.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <Container className="my-5" id="services">
            <h2 className="text-center my-3 text-white"><small>Our Awesome <span className="text-warning">Services</span></small></h2>
            <Row xs={1} md={2} lg={3} className="g-4">
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </Row>
        </Container>
    );
};

export default Services;