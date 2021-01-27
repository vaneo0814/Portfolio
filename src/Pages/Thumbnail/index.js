import React from 'react'; // Import the Component component from React
import { Link } from 'react-router-dom'; // Import the Link component
// import './Pages/App.css';
import './style.css';


function Thumbnail(props) {
    return (
        <div className="project">
            <Link to={props.link}>
                <div className="project-image">
                    <img className="projectImages" src={props.image} alt={props.image} />
                </div>
                <div className="project-title">{props.title}</div>
                <div className="project-category">{props.category}</div>
            </Link>
        </div>
    );
}

export default Thumbnail;