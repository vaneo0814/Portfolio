import React from "react";
import Typical from 'react-typical';
import './style.css';

 
function Home(props) {
  return (
    <div className="homeContainer">
       <div className="row">
      <div className="col-lg leftColumn">
        <header>
          Hello 
        </header>
        <a href="portfolio.html">
          {/* <button type="button" class="btn btn-light view-work" data-toggle="button" aria-pressed="false">
            View my work
          </button> */}
        </a>
      </div>
      <div className="col-lg rightColumn">
        <header className="homeHeader">
        Hi,<br/> I'm <span>Vanessa Orellana</span>,
        </header>
        <p className="typicalEffect">
        <Typical
        loop={Infinity}
        wrapper="b"
        steps={['a Full-Stack Developer.', 100]}
      />
      </p> 
      </div>
    </div>
    </div>
  )
}
 
export default Home;