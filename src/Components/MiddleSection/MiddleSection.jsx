import React , {useState} from 'react';
import './MiddleSection.css';
import Grp28 from '../../Images/grp29.png';

export default function MiddleSection() {
    const [checked,setC]=useState(true);
    return (
        <div className='middle-section'  >
            
            <div className="middle-section-1" data-aos="slide-right"  >
                <div className="img-cont">
                    <img src={Grp28}  id='img-2' />
                </div>   
            </div>

            <div className="middle-section-2" data-aos="slide-right"  >
                
                <div className="heading">Find Your Right Mentor</div>
                <div style={{color:'rgb(168, 168, 168)',marginTop:'12px'}}>Stay connected with monthly or yearly subscription</div>
                
                <div className="box" style={{marginTop:'40px'}}>
                    <div style={{fontSize:'20px'}}>Ring or message your mentor anytime.</div>
                    <div style={{marginTop:'10px' , color:'rgb(168, 168, 168)'}} >We have the right mentors for any job, we'll find you the right mentor and help you to connect with them easily.</div>
                </div>
                <div className="box">
                    <div style={{fontSize:'20px'}}>Become a mentor and help out people.</div>
                    <div style={{marginTop:'10px' , color:'rgb(168, 168, 168)'}} >We have the right mentors for any job, we'll find you the right mentor and help you to connect with them easily.</div>
                </div>
        
            </div>
        </div>
    )
}
