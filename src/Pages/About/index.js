import React from "react";
import Typical from "react-typical";
import "./style.css";
import "animate.css";
import Resume from '../../utils/Resume/updatedresume.pdf';


function About() {
  return (
    <div className="aboutPage">
      <div className="col-lg leftAbout">
        <Typical
          loop={Infinity}
          wrapper="h1"
          className="aboutHeader"
          steps={[1000, "About the developer", 1000]}
        />
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
        <p class="animate__animated animate__backInLeft">
          Nice to meet you, I'm Vanessa Orellana, a Front-end developer
          &#x1F4BB;. About a year and a half ago I found my passion in front-end
          development. Although a late bloomer, I went on to pursue programming
          by attending Rutgers Universities Full Stack Coding Bootcamp,
          completing other online courses, and spending countless hours learning
          the art. After getting my certification & graduating from Rutgers Full
          Stack Bootcamp, I went on to attend Rutgers Advanced Front-end
          Program. I received my certification from the Advanced-Front end
          program in October of 2021. I am extremely intrigued in the entire front-end spectrum of
          programming and aspire to work on ambitious projects with positive/creative people. I
          like to create unique projects challenging myself to achieve my
          visionary goals as well as learning the many languages of
          programming. I have both front-end and back-end experience with many
          projects to show the skills that I attained. I make it a priority to
          continue to perfect my craft.<br/>
          <p className="skills">
          <a className="resume" href={Resume} target="_blank" size="lg" rel="noreferrer">
            Resume &#x1F4C4;
            </a>
         
          </p>
        </p>
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
