import logo from './logo.svg';
import './App.css';
import brand from './tlbrand.png';
// import Navbar from 'react-bootstrap/Navbar'
// import Nav from 'react-bootstrap/Nav'


function App() {
  return (
    <div className="App">
      <div className="App-navcontainer">
        <span>
          TL
        </span>
        <div className="App-navbar-items">
          <a href="#">ABOUT</a>
          <a href="#">PROJECTS</a>
          <a href="#">3 IN 30</a>
          <a href="#">RESUME</a>
          <a href="#">CONTACT</a>
        </div>
      </div>

      <header className="App-header">
        <img src={brand} className="App-logo" alt="logo" />
        <p> Coming Soon!</p>

      </header>
    </div>
  );
}

export default App;
