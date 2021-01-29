import React from "react";
import Typical from 'react-typical';
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
    </div>
  )
}

export default Home;