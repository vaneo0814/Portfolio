import React from "react";
import Typical from 'react-typical';
import { FaCode } from 'react-icons/fa';
import { FaPencilRuler } from 'react-icons/fa';
import { FaLaptop } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './style.css';


function Home(props) {
  return (
    <div className="homeContainer">
      <div className="row">
        <div className="col-lg leftColumn">
          {/* //this is going to have to be a link */}
          <Link to="projects">
            <button className="button"><span>View my work</span>
            </button>
          </Link>
        </div>
        <div className="col-lg rightColumn">
        <Link to="projects">
            <button className="buttonHide"><span>View my work</span>
            </button>
          </Link>
          <header className="homeHeader">
            Hi,<br /> I'm <span className="nameSpan">Vanessa Orellana</span>,
        </header>
          <p className="typicalEffect">
            <Typical
              loop={Infinity}
              wrapper="b"
              steps={[1000, 'a Full-Stack Developer.', 1000, 'I like to design & build UIs.', 1000]}
            />
          </p>
         
        </div>
      </div>  
      <div className="row skillsContainer">
        <div className="col-lg">
          <h1 className="skillsLogo">
          <FaCode />
          </h1>
          <p className="home-skills">
          I like to design from scratch & <br/>have a passion for bringing ideas to <br/>life in the browser.
          </p>
        </div>
        <div className="col-lg">
          <h1 className="skillsLogo">
        <FaPencilRuler />
          </h1>
          <p className="home-skills">
            <em>Things I enjoy designing:</em>
            <br/>
            UX, UI, Mobile, <br/>Apps, Logos.
          </p>
        </div>
        <div className="col-lg">
        <h1 className="skillsLogo">
        <FaLaptop />
          </h1>
          <p className="home-skills">
            <em>Skills Attained:</em>
            <br/>
            JS, HTML, CSS, React.js, MySQL, APIs, <br/>Node.js, Express.js, MongoDB, Git, jQuery, AJAX, Full MERN Stack, Github + VSCode
          </p>
        </div>
        </div>                                                                        
    </div>
  )
}

export default Home;