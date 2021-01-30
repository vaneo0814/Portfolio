import { BrowserRouter, Route} from 'react-router-dom';
import Projects from './Pages/Projects';
import Home from './Pages/Home';
import About from './Pages/About';
import Navigation from './Components/Nav';
import Footer from './Components/Footer';

import './App.css';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navigation/>
      {/* Routes  */}
      <Route exact path="/react_portfolio" component={Home} />
      <Route exact path="/projects" component={Projects} />
      <Route path="/about" component={About} />
    <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
