import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faGithub } from '@fortawesome/free-brands-svg-icons';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Registration = () => {
    const { signInUsingGoogle, signInUsingGithub } = useAuth();
    return (
        <Container className="w-50 mx-auto my-3">
            <Form className="form-bg">
                <h3><strong>Please Registration</strong></h3>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <div className="d-flex align-items-center">
                        <Form.Control className="input" type="email" placeholder="Enter Email" />
                    </div>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <div className="d-flex align-items-center">
                        <Form.Control type="password" placeholder="Password" />
                    </div>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <div className="d-flex align-items-center">
                        <Form.Control type="password" placeholder="Confirm Password" />
                    </div>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Register
                </Button>
                <hr />
                <div>
                    <Button onClick={signInUsingGoogle} className="me-3"><FontAwesomeIcon icon={faGoogle} /> Continue with Google</Button>
                    <Button onClick={signInUsingGithub}><FontAwesomeIcon icon={faGithub} /> Continue With Github</Button>
                </div>
                <p className="mt-3">Already Have an Account? <Link to='/login'>Login</Link></p>

            </Form>
        </Container>
    );
};

export default Registration;