import React from "react";
import Typical from "react-typical";
import { FaCode } from "react-icons/fa";
import { FaLaptop } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./style.css";

function Home() {
  return (
    <div className="homeContainer">
      <div className="row">
        <div className="col-lg leftColumn">
          {/* //this is going to have to be a link */}
          <Link to="/projects">
            <button className="button">
              <span>View my work</span>
            </button>
          </Link>
        </div>
        <div className="col-lg rightColumn">
          <Link to="/projects">
            <button className="buttonHide">
              <span>View my work</span>
            </button>
          </Link>
          <header className="homeHeader">
            Hi,
            <br /> I'm <span className="nameSpan">Vanessa Orellana</span>,
          </header>
          <p className="typicalEffect">
            <Typical
              loop={Infinity}
              wrapper="b"
              steps={[
                1000,
                "a Full-Stack Developer.",
                1000,
                "I like to design & build UIs.",
                1000,
              ]}
            />
          </p>
        </div>
      </div>
      <div className="row skillsContainer">
        <div className="col-lg">
          <h1 className="skillsLogo">
            <FaCode size={70} /> <br />
            <h2>Design</h2>
          </h1>
          <section className="home-skills">
            Simple content organization, clean design principles, and <br />
            intelligent interactions are all things I consider important.
          </section>
          <section>
            <h5>Things I enjoy designing:</h5>
            <p>UX, UI, Web, Mobile, Apps, Logos</p>
          </section>
          <section>
            <h5>Design Tools &#128394;</h5>
            <p>Figma, Webflow, Sketch, Pen  Paper, Sass</p>
          </section>
        </div>
        <div className="col-lg">
          <h1 className="skillsLogo">
            <FaLaptop size={70} />
            <br /> <h2>Front-end Developer</h2>
          </h1>
          <section className="home-skills">
            I enjoy designing from the ground up and am passionate
            <br /> about organization, clean design principles, and intelligent{" "}
            <br />
            interactions are all things I value.
          </section>
          <section>
            <h5>Languages I speak:</h5>
            <p>HTML, CSS, Sass, React.js, Next.js, Jquery, JS</p>
          </section>
          <section>
            <h5>Dev Tools &#128736;</h5>
            <p>Bootstrap, Codepen, Github, Terminal, Sass, VSCode, Chrome, Prettier, Git, Npm, Wordpress</p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Home;
