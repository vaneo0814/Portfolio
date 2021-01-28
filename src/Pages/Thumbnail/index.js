import React from 'react'; // Import the Component component from React
// import { Link } from 'react-router-dom'; // Import the Link component
// import './Pages/App.css';
import './style.css';


function Thumbnail(props) {
    return (
        <div className="project">
            <div className="project-image">
                <a className="aLinks" href={props.link} rel="noreferrer" target="_blank">
                    <img className="projectImages" src={props.image} alt={props.image} />
                </a>
            </div>
            <div className="project-title">
                <a className="aLinks" href={props.link} rel="noreferrer" target="_blank">
                    {props.title}
                </a>
            </div>
            <div className="project-category">{props.category}</div>

        </div>
    );
}

export default Thumbnail;