import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import '../bootstrap/css/bootstrap.css';
import '../bootstrap/css/bootstrap-grid.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

function NavigationBar() {
    const [selectedLink, setSelectedLink] = useState("#home");

    return (
        <Navbar bg="black" expand="lg" className='animate__animated animate__rotateInDownLeft '>
            <Navbar.Brand href="#home" className="mx-auto">Bamz's Portofolio</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home" className={`ml-3 ${selectedLink === "#home" ? "selected" : ""}`} onClick={() => setSelectedLink("#home")}>Home</Nav.Link>
                    <Nav.Link href="#link" className={`ml-3 ${selectedLink === "#link" ? "selected" : ""}`} onClick={() => setSelectedLink("#link")}>Link</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="https://www.linkedin.com/in/akbar-aulia-ramadhan-4aa50721a/">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </Nav.Link>
                    <Nav.Link href="https://github.com/akbaraulia">
                        <FontAwesomeIcon icon={faGithub} />
                    </Nav.Link>
                    <Nav.Link href="https://www.instagram.com/_bamss___/">
                        <FontAwesomeIcon icon={faInstagram} />
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavigationBar;