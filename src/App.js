import { useEffect } from 'react';
import NavBar from './Components/NavBar/NavBar.jsx';
import MiddleSection from './Components/MiddleSection/MiddleSection.jsx';
import Slider from './Components/Slider/Slider.jsx';
import Cards from './Components/Cards/Cards.jsx';
import './App.css';
import Grp11 from './Images/grp11.png';
import Grp22 from './Images/grp22.png';
import gsap from 'gsap';

function App() {

  useEffect(() => {
    
    gsap.to("#help-button", 1 ,{ scale:0.9 ,yoyo:true ,repeat:-1 ,ease: "power1.inOut" });
    
  }, [])
  return (
    <div className="home">
      <NavBar />
      
      <div className="home-screen" data-aos='slide-left' >
        <div className="section-1">
          
          <div id="intro-text-1">We Help People Connect
          with their Right Mentors .
          </div>
          <div id="intro-text-2">
            We have the right Mentors for any job, we will find you the right Mentor and help you to connect with them easily and effectively.
          </div>
          <div className='button-cont'>
            <img id="circle" src={Grp11} />
            <button id="help-button">Need Help ?</button>
          </div>
        </div>
        <div className="section-2">
          <img src={Grp22} id='main-img' />
        </div>
      </div>

      
      <MiddleSection />
      
      <Cards />

      <div style={{display:'flex',justifyContent:'center',marginTop:'40px'}} >
        <div style={{width:'85%',backgroundColor:'rgb(189, 189, 189)',height:'4px',borderRadius:'2px'}} >
        </div>
      </div>

      
      <div data-aos='slide-right'>
        <div id='featured'>
          Featured Mentors
        </div>
        
        <Slider />
      </div>
      
      
    </div>
  );
}

export default App;
