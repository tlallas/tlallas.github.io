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
          <a href="#about">about</a>
          <a href="#projects">projects</a>
          <a href="#resume">resume</a>
          <a href="#contact">contact</a>
        </div>
      </div>
      <header className="Landing-jumbotron">
        <img src={profile}  alt="logo" className="profile-photo"/>
        <div className="Landing-jumbo-text-container"> 
          <h1 style={{fontSize: "3em", marginBottom: '-1%'}}>hi, </h1>
          <h1 style={{marginBottom: '-3%'}}> i'm <span style={{color: "rgb(179, 6, 6)"}}>taylor lallas</span>! </h1>
          <p>product builder<b style={{fontSize: "1.5em"}}>.</b>  ui/ux designer<b style={{fontSize: "1.5em"}}>.</b>   biz strategist<b style={{fontSize: "1.5em"}}>.</b> </p>
          <div className="recent-highlights">
            <p className="mini-label">now <br/> <span className="recent-point">Teaching <a target="_blank" href="https://hci.stanford.edu/courses/cs147/2022/wi/index.html" className="recent-point-resource">Human-Centered Design</a> @ Stanford<br/>Pursuing a Master's in Computer Science @ Stanford</span></p>
            <p className="mini-label">previously <br/> <span className="recent-point">Emerging Products @ T-Mobile
             <br/>New Product Experimentation & Novi  @ Meta</span>
             <br/>
             </p>

          </div>
   </div>
      </header>
      <div id="about" className="aboutSection">
          <h2 className="aboutTitle">about</h2>
          <div className="aboutText">
            I am a <span className="highlightText">Master's</span> student in <span className="highlightText">Computer Science</span> at <span className="highlightText">Stanford University</span>. Though I have broad exposure across
            CS disciplines including systems, security, and algorithmic theory, I am focused on <span className="highlightText">Human-Computer Interaction Design</span>. 

            <br/>
            <br/>
            I also earned my <b className="highlightText">Bachelor's degree in Economics</b> from Stanford ('21). During my undergraduate time at The Farm, 
            I was a member of the Stanford Women's Tennis Team. We captured two NCAA national championships in those four years, and I had the honor of co-captaining the 
            squad for my senior season.
            </div>
        </div>
        <div id="resume" className="resumeSection">
          <h2 className="resumeTitle">resume</h2>
          <div className="resumeText">
           this is a placeholder
            </div>
        </div>
    </div>
  );
}

export default App;
