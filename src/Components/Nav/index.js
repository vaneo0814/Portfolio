import React from 'react';
// import Logo from './img/vLogo.img';
import { Link } from 'react-router-dom';
import vLogo from './img/vLogo.jpg';

import { Navbar, Nav} from 'react-bootstrap';

class Navigation extends React.Component {

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <Navbar bg="light" variant="light" expand="lg" sticky="top">
              <Navbar.Brand>
                <img src={vLogo} width="60" height="60" className="d-inline-block align-top" alt="inital_logo" loading="lazy" />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Link className="nav-link" to="/portfolio">Home</Link>
                    <Link className="nav-link" to="/projects">Projects</Link>
                    <Link className="nav-link" to="/about">About</Link>
                    <Nav.Link href="mailto:vorellana814@gmail.com">Contact</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </div>
        </div>
      </div>
    )
  }
}

export default Navigation;

