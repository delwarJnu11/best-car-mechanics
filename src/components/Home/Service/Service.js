import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    console.log(service)
    const { _id, name, image, price, description } = service;
    return (
        <Col>
            <Card className="pb-3 text-center">
                <Card.Img variant="top" height="300px" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{description} </Card.Text>
                    <Card.Text>Fees- ${price} </Card.Text>
                </Card.Body>
                <Link to={`/booking/${_id}`}>
                    <Button variant="warning">Book {name.toLowerCase()}</Button>
                </Link>
            </Card>
        </Col>
    );
};

export default Service;