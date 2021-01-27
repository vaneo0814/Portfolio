import { BrowserRouter, Route} from 'react-router-dom';
import Projects from './Pages/Projects';
import Articles from './Pages/Articles';
import About from './Pages/About';
import Nav from './Components/Nav';
import './App.css';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Nav/>
      {/* Routes  */}
      <Route exact path="/" component={Projects} />
      <Route path="/articles" component={Articles} />
      <Route path="/about" component={About} />


    
    </div>
    </BrowserRouter>
  );
}

export default App;
