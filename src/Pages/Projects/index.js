import React from "react";
import Thumbnail from '../Thumbnail';
import { FaGit } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
// import './Pages/App.css';

function Projects(props) {
    return (
        <div>
            <h1 className="projectHeader">Projects</h1>
            <div className="row logos">
                <div className="col-sm-4">
                    <a className="icons" href="https://www.linkedin.com/in/vanessa-orellana-36769986/">
                        <h4>
                            <FaLinkedinIn />
                        </h4>
                    </a>
                </div>
                <div className="col-sm-4">
                    <a className="icons" href="https://github.com/vaneo0814">
                        <h3>
                            <FaGit />
                        </h3>
                    </a>
                </div>
                <div className="col-sm-4">
                    <a className="icons" href="mailto:vorellana814@gmail.com">
                        <h4>
                            <FaEnvelope/>
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
            />
            <Thumbnail
                link="https://whispering-stream-30896.herokuapp.com/"
                image="https://i.postimg.cc/t7QzVCGr/Screen-Shot-2021-01-26-at-4-38-20-PM.png"
                title="Smartrvl"
                category="Website/App"
            />
            <Thumbnail
                link="https://whispering-stream-30896.herokuapp.com/"
                image="https://i.postimg.cc/1X6jdd9j/workoutdashboard.png"
                title="Workout Tracker"
                category="App"
            />
            <Thumbnail
                link="https://whispering-stream-30896.herokuapp.com/"
                image="https://i.postimg.cc/Dw5YRLTn/workdayplanner.png"
                title="Workday Planner"
                category="App"
            />
            <Thumbnail
                link="https://whispering-stream-30896.herokuapp.com/"
                image="https://i.postimg.cc/KcLpxd29/weatherdashboard.png"
                title="Weather App"
                category="App"
            />
            <Thumbnail
                link="https://whispering-stream-30896.herokuapp.com/"
                image="https://i.postimg.cc/dt6B0FS9/Screen-Shot-2021-01-26-at-4-36-22-PM.png"
                title="Deep Dive BJJ"
                category="Website"
            />
            <Thumbnail
                link="https://whispering-stream-30896.herokuapp.com/"
                image="https://i.postimg.cc/vTMrQ2rj/Screen-Shot-2021-01-26-at-4-40-06-PM.png"
                title="Gaming Quiz"
                category="Website"
            />
            <Thumbnail
                link="https://whispering-stream-30896.herokuapp.com/"
                image="https://i.postimg.cc/8C6MLgw9/Screen-Shot-2021-01-26-at-4-39-25-PM.png"
                title="New York Times Search"
                category="Website"
            />
            <Thumbnail
                link="https://whispering-stream-30896.herokuapp.com/"
                image="https://i.postimg.cc/kXGVxdgs/notetaker.png"
                title="Notes"
                category="App"
            />
            <Thumbnail
                link="https://whispering-stream-30896.herokuapp.com/"
                image="https://i.postimg.cc/KYQqNYk4/Screen-Shot-2021-01-27-at-11-42-41-AM.png"
                title="Employee Directory"
                category="React App"
            />
            </div>
        </div>
    )
}

export default Projects;