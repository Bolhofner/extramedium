import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Nav from 'react-bootstrap/esm/Nav';
import Navbar from 'react-bootstrap/esm/Navbar';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
      <Navbar >
        <Container>
          <Navbar.Brand href="/">conduit</Navbar.Brand>
          <Nav className="nav navbar-nav pull-xs-right">
            <Nav.Item className="nav-item">
              <NavLink className="nav-link" to="/">Home</NavLink>
            </Nav.Item>
            <Nav.Item className="nav-item">
              <NavLink className="nav-link" to="/article">
                <i className="ion-compose"></i>&nbsp;New Post
              </NavLink>
            </Nav.Item>
            <Nav.Item className="nav-item">
              <NavLink className="nav-link" to="/settings">
                <i className="ion-gear-a"></i>&nbsp;Settings
              </NavLink>
            </Nav.Item>
            <Nav.Item className="nav-item">
              <NavLink className="nav-link" to="/register">Sign up</NavLink>
            </Nav.Item>
          </Nav>
        </Container>
    </Navbar>
  );
}

export default Header;
