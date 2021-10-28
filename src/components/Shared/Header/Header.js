import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../images/logo.png';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg" sticky="top">
                <Container>
                    <Navbar.Brand href="#home"><img width="150px" src={logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#experts">Experts</Nav.Link>
                        {
                            !user.email ? <Nav.Link as={HashLink} to="/login">Login</Nav.Link> :
                                <Button onClick={logOut} variant="light">Log Out</Button>
                        }
                        {user.email && <Navbar.Text>
                            Signed in as: <span>{user.displayName}</span>
                        </Navbar.Text>}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;