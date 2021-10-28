import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKey, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGoogle, faGithub } from '@fortawesome/free-brands-svg-icons';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const { signInUsingGithub, signInUsingGoogle, setIsLoading } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state.from || "/home";
    const handleGoogleSignIn = () => {
        signInUsingGoogle().then(result => {
            history.push(redirect_uri);
        })
            .finally(() => {
                setIsLoading(false);
            })
    }
    return (
        <Container className="w-50 mx-auto my-5">
            <Form className="form-bg">
                <h3><strong>Please Log In</strong></h3>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <div className="d-flex align-items-center">
                        <FontAwesomeIcon className="icon-bg" icon={faUser} />
                        <Form.Control className="input" type="email" placeholder="Enter Email" />
                    </div>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <div className="d-flex align-items-center">
                        <FontAwesomeIcon className="icon-bg" icon={faKey} />
                        <Form.Control type="password" placeholder="Password" />
                    </div>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Log In
                </Button>
                <hr />
                <div>
                    <Button onClick={handleGoogleSignIn} className="me-3"><FontAwesomeIcon icon={faGoogle} /> Continue with Google</Button>
                    <Button variant="secondary" onClick={signInUsingGithub}><FontAwesomeIcon icon={faGithub} /> Continue With Github</Button>
                </div>
                <p className="mt-3">New User? <Link to='/register'>Register</Link></p>

            </Form>
        </Container>
    );
};

export default Login;