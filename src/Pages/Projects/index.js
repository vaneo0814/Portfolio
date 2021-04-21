import React from "react";
import Thumbnail from '../Thumbnail';
import { FaGit } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaFilePdf } from 'react-icons/fa';
// import './Pages/App.css';

function Projects() {
    return (
        <div>
            <h1 className="projectHeader">Projects</h1>
            <div className="row logos">
                <div className="col-sm-4">
                    <a className="icons" href="https://www.linkedin.com/in/vanessa-orellana-36769986/" rel="noreferrer" target="_blank">
                        <h4>
                            <FaLinkedinIn />
                        </h4>
                    </a>
                </div>
                <div className="col-sm-4">
                    <a className="icons" href="https://github.com/vaneo0814" rel="noreferrer" target="_blank">
                        <h3>
                            <FaGit />
                        </h3>
                    </a>
                </div>
                <div className="col-sm-4">
                    <a className="icons" href="mailto:vorellana814@gmail.com">
                        <h4>
                            <FaFilePdf/>
                        </h4>
                    </a>
                </div>
            </div>
            <div className="thumbnail">
            <Thumbnail
                link="https://whispering-stream-30896.herokuapp.com/"
                image="https://i.postimg.cc/q7qw6FCC/pab.png"
                title="Potentially a Blog"
                category="Website"
                github="https://github.com/vaneo0814/blogApp/"
            />
            <Thumbnail
                link="https://kaitlinkenney.github.io/SmartTrvlApp/"
                image="https://i.postimg.cc/t7QzVCGr/Screen-Shot-2021-01-26-at-4-38-20-PM.png"
                title="Smartrvl"
                category="Website/App"
                github="https://github.com/vaneo0814/smartrvl-app"
            />
            <Thumbnail
                link="https://stormy-anchorage-68149.herokuapp.com/?id=600366bffc469a0015c0860c"
                image="https://i.postimg.cc/1X6jdd9j/workoutdashboard.png"
                title="Workout Tracker"
                category="App"
                github="https://github.com/vaneo0814/workout_tracker"

            />
            <Thumbnail
                link="https://vaneo0814.github.io/workdayPlanner/"
                image="https://i.postimg.cc/Dw5YRLTn/workdayplanner.png"
                title="Workday Planner"
                category="App"
                github="https://github.com/vaneo0814/workdayPlanner"
            />
            <Thumbnail
                link="https://vaneo0814.github.io/Weather-Dashboard/"
                image="https://i.postimg.cc/KcLpxd29/weatherdashboard.png"
                title="Weather App"
                category="App"
                github="https://github.com/vaneo0814/Weather-Dashboard"

            />
            <Thumbnail
                link=""
                image="https://i.postimg.cc/dt6B0FS9/Screen-Shot-2021-01-26-at-4-36-22-PM.png"
                title="Deep Dive Jiu Jitsu"
                category="Website (Work in progress...)"
                github="https://github.com/vaneo0814/deepdive"
                
            />
            <Thumbnail
                link="https://vaneo0814.github.io/WebAPI_CodeQuiz/"
                image="https://i.postimg.cc/vTMrQ2rj/Screen-Shot-2021-01-26-at-4-40-06-PM.png"
                title="Gaming Quiz"
                category="Website"
                github="https://github.com/vaneo0814/WebAPI_CodeQuiz"
            />
            <Thumbnail
                link="https://vaneo0814.github.io/NYT-Search/"
                image="https://i.postimg.cc/8C6MLgw9/Screen-Shot-2021-01-26-at-4-39-25-PM.png"
                title="New York Times Search"
                category="Website"
                github="https://github.com/vaneo0814/NYT-Search"

            />
            <Thumbnail
                link="https://github.com/vaneo0814/NoteTaskApp"
                image="https://i.postimg.cc/kXGVxdgs/notetaker.png"
                title="NoteTaker"
                category="Express backend App"
                github="https://github.com/vaneo0814/NoteTaskApp"

            />
            <Thumbnail
                link="https://vaneo0814.github.io/react_directory/"
                image="https://i.postimg.cc/KYQqNYk4/Screen-Shot-2021-01-27-at-11-42-41-AM.png"
                title="Employee Directory"
                category="React App"
                github="https://github.com/vaneo0814/react_directory"

            />
            </div>
        </div>
    )
}

export default Projects;