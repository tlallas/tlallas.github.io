import logo from './logo.svg';
import profile from './images/profile.jpg';
import './App.css';
import brand from './tlbrand.png';
// import Navbar from 'react-bootstrap/Navbar'
// import Nav from 'react-bootstrap/Nav'


function App() {
  return (
    <div className="App">
      <div className="App-navcontainer">
        <a className="Main-initials" href="/">
          tl.
        </a>
        <div className="App-navbar-items">
          <a href="#">about</a>
          <a href="#">resume</a>
          <a href="#">portfolio</a>
          <a href="#">contact</a>
        </div>
      </div>

      <header className="Landing-jumbotron">
        <img src={profile}  alt="logo" className="profile-photo"/>
        <div className="Landing-jumbo-text-container"> 
          <h1 style={{fontSize: "3em"}}>hi, </h1>
          <h1 style={{}}> i'm <span style={{color: "rgb(179, 6, 6)"}}>taylor lallas</span>! </h1>
          <p>frontend engineer,</p>
          <p>ui / ux designer,</p>
          <p>strategist.</p>

        
        </div>

      </header>
    </div>
  );
}

export default App;
