import React from "react";
// import ParticlesBg from "particles-bg";
import "./style.css";
import { FaGithub } from "react-icons/fa";
import 'animate.css';


function About() {
  return (
    <div className="aboutPage">
      <div className="col-lg">
        <h1 className="aboutHeader">About the developer</h1>
        <p className="skills">
          Visit my{" "}
          <a
            className="skillsContact"
            href="https://www.linkedin.com/in/vanessa-orellana-36769986/"
            target="_blank"
            rel="noreferrer"

          >
            linkedin
          </a>{" "}
          for more details or feel free to{" "}
          <a className="skillsContact" href="mailto:vorellana814@gmail.com">
            contact me.
          </a>
        </p>
      
        <a
          href="https://github.com/vaneo0814"
          target="__blank"
          rel="noreferrer"
        >
        </a>
        <p class="animate__animated animate__rotateInDownLeft">An animated element</p>

      </div>
      <div className="col-lg">
        {/* headshot photo */}
        <img
          src="https://i.postimg.cc/rs8tDmKy/ello.jpg"
          alt="headshot"
          className="headshot"
        ></img>
      </div>
    </div>
  );
}

export default About;
