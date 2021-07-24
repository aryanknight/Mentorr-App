import React from 'react';
import Web from '../../Images/web.png';
import Design from '../../Images/design.png';
import Business from '../../Images/business.png';
import Market from '../../Images/market.png';
import Music from '../../Images/music.png';
import Photography from '../../Images/photography.png';
import Personal from '../../Images/personal.png';
import Software from '../../Images/software.png';
import './Courses.css';

export default function Courses() {
    return (
        <div className="courses">

            <div className="courses-card-cont">
                <div className="courses-card">
                    <img src={Web} alt="" className="course-img" />
                    <div className="course-text">Web Developement</div>
                </div>
            </div>    
            <div className="courses-card-cont">    
                <div className="courses-card">
                    <img src={Design} alt="" className="course-img" />
                    <div className="course-text">Design</div>
                </div>
            </div>    
            <div className="courses-card-cont">    
                <div className="courses-card">
                    <img src={Software} alt="" className="course-img" />
                    <div className="course-text">Software and IT</div>
                </div>
            </div>    
            <div className="courses-card-cont">    
                <div className="courses-card">
                    <img src={Photography} alt="" className="course-img" />
                    <div className="course-text">Photography</div>
                </div>
            </div>    
            <div className="courses-card-cont">    
                <div className="courses-card">
                    <img src={Business} alt="" className="course-img" />
                    <div className="course-text">Business</div>
                </div>
            </div>    
            <div className="courses-card-cont">    
                <div className="courses-card">
                    <img src={Market} alt="" className="course-img" />
                    <div className="course-text">Marketing</div>
                </div>
            </div>    
            <div className="courses-card-cont">    
                <div className="courses-card">
                    <img src={Music} alt="" className="course-img" />
                    <div className="course-text">Music</div>
                </div>
            </div>    
            <div className="courses-card-cont">    
                <div className="courses-card">
                    <img src={Personal} alt="" className="course-img" />
                    <div className="course-text">Personal Developement</div>
                </div>
            </div>    

        </div>
    )
}
