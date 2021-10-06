import React from 'react';
import { FaEnvelope } from 'react-icons/fa';
import './style.css';


function Footer() {
    return (
        <div className="footerContainer">
            <h2 className="footerHeader">
                Lets build something great together.
            </h2>
            <a className="icons" href="mailto:vorellana814@gmail.com">
                        <h2 className="envelopeFooter">
                            <FaEnvelope />
                        </h2>
                    </a>
            <h4 className="designBy">
                Design by Vanessa Orellana
            </h4>
            <footer>
               Copyright &copy; 2021
            </footer>
        </div>
    )
}

export default Footer;