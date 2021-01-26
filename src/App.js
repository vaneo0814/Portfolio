import { BrowserRouter, Route, Link } from 'react-router-dom';
import Projects from './Pages/Projects';
import Articles from './Pages/Articles';
import About from './Pages/About';
import Logo from './img/vLogo.jpg';
import './App.css';


function App() {
  return (
    <div className="App">
      {/* Routes  */}
      <Route exact path="/" component={Projects} />
      <Route path="/articles" component={Articles} />
      <Route path="/about" component={About} />


      <div className="navigation">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="">
            <img src={Logo} width="60" height="60" class="d-inline-block align-top" alt="inital_logo" loading="lazy" />
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link" href="">Projects</a>
              <a className="nav-link" href="">Articles</a>
              <a className="nav-link" href="">About</a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default App;
