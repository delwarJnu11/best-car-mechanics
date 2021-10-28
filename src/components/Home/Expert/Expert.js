import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Expert = ({ expert }) => {
    const { name, role, image } = expert;
    return (
        <Col>
            <Card className="text-center">
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text className="text-danger fw-bold">{role}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Expert;