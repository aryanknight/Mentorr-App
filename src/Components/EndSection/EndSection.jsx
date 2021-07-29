import React from 'react';
import Grp13 from '../../Images/grp13.png';
import Grp14 from '../../Images/grp14.png';
import './EndSection.css';

export default function EndSection() {
    return (
        <div className="end-section">
            <div className="end-text-cont">
                <div className="end-text-1"><b>Mentorr</b> <span style={{color:'#FF00DD'}} >Business</span></div>
                <div className="end-text-2">Get unlimited access to 6,000+ of Udemy’s top courses for your team. Learn and improve skills across business, tech, design, and more.</div>
                <div className='end-butt-cont' ><button className="end-button">Get Mentorr Business</button></div>
   
            </div>

            <div className="end-img-cont">
                <img src={Grp13} alt="" className="end-img" />
            </div>

            <div className="end-img-cont" style={{justifyContent:'center'}}>
                <img src={Grp14} alt="" className="end-img" />
            </div>

            <div className="end-text-cont" style={{alignItems:'flex-start'}} >
                <div className="end-text-1"><b>Transform</b> your life through <span style={{color:'#FF00DD'}}>Education</span></div>
                <div className="end-text-2">Learners around the world are launching new careers, advancing in their fields, and enriching their lives.</div>
                <div className='end-butt-cont' ><button className="end-button">Find Out How ?</button></div>
   
            </div>
        </div>
    )
}
