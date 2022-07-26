import React from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { useAuth } from '../../../contexts/AuthContext'

const Navigation = () => {

    const { logout, currentUser } = useAuth()
    console.log(currentUser)
    const handleLogout = () => {
        logout();
    }
    const check = currentUser?.photoURL||false;
    return (
        <Navbar bg="light" variant="light" >
            <Container>
                <Navbar.Brand href="#home">Ravu</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>

                </Nav>
                <Nav>
                    <Button variant="light" onClick={handleLogout}>Log Out</Button>
                    {check ?
                        <img className="rounded-circle w-25 h-25" src={currentUser?.photoURL} alt="profileImage" />
                        : <Navbar.Text>
                            Signed in as: <a href="#login">{currentUser?.displayName}</a>
                        </Navbar.Text>
                    }
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Navigation;