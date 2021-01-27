import React from 'react';
// import Logo from './img/vLogo.img';
import {Link} from 'react-router-dom';
import vLogo from './img/vLogo.jpg'


function Nav (){
    return(
    <div className="navigation">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <img src={vLogo} width="60" height="60" className="d-inline-block align-top" alt="inital_logo" loading="lazy" />
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link className="nav-link" to="/react_portfolio">Home</Link>
          <Link className="nav-link" to="/projects">Projects</Link>
          <Link className="nav-link" to="/about">About</Link>
          <a className="nav-link" href="mailto:vorellana814@gmail.com">Contact</a>
        </div>
      </div>
    </nav>
  </div>
    )
}
export default Nav;