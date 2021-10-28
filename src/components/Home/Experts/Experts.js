import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Expert from '../Expert/Expert';

const Experts = () => {
    const [experts, setExperts] = useState([]);
    useEffect(() => {
        fetch('./mechanics.json')
            .then(res => res.json())
            .then(data => setExperts(data));
    }, [])
    return (
        <Container className="mt-5" id="experts">
            <h2 className="text-center my-3 text-white"><small>Our Awesome <span className="text-warning">Experts</span></small></h2>
            <Row xs={1} md={2} lg={3} className="g-4">
                {
                    experts.map(expert => <Expert
                        key={expert.id}
                        expert={expert}
                    ></Expert>)
                }
            </Row>
        </Container>
    );
};

export default Experts;