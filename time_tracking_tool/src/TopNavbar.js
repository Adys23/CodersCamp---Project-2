import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';

class TopNavbar extends React.Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Time Tracking Tool</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-sm-2">
                <Nav.Link href="#">Log in</Nav.Link>
                <Nav.Link href="#">Settings</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default TopNavbar