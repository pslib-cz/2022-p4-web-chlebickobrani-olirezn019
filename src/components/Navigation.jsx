import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

const Navigation = ({total}) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const linkStyle = {textDecoration: "none"};

    return (
        <Navbar bg="light" expand="lg">
          <Container>
            <Link to="/" style={linkStyle}>
              <Navbar.Brand>
                <del>Pivo</del><ins>Chlebíčko</ins>braní
              </Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Link to="/setup" style={linkStyle}>
                  <Nav.Link href="javascript:void(0)">Setup</Nav.Link>
                </Link>
                <Navbar.Text>Počet: {total}</Navbar.Text>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}

export default Navigation;