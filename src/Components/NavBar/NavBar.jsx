import React from 'react';
import './NavBar.css';

export default function NavBar() {

    const expandMenu =()=>{
        
        const menu = document.getElementsByClassName('menu-container')[0];
        if(menu.style.maxHeight==='100%'){
            menu.style.maxHeight=0+'px';
            menu.style.transition='0.5s';
        }else{
            menu.style.transition='1s';
            menu.style.maxHeight='100%';
        }
        console.log(menu.style.maxHeight);
        //menu.classList.toggle('active');
    }

    
    return (
        <div>
            <div className="navbar">
                <div className="left">
                    <div id="logo" style={{marginLeft:'20px',fontSize:"22px"}}>MENTORR</div>
                </div>

                <div className="right">
                    <div className='items'>
                        <div className='item'>Home</div>
                        <div className='item'>About Us</div>
                        <div className='item'>Mentors</div>
                        <div className='item'>Become Mentor</div>
                        
                        <div onClick={expandMenu}>
                            <div className='menu-bar'></div>
                            <div className='menu-bar'></div>
                            <div className='menu-bar'></div>
                        </div>

                    </div>
                </div>
            </div>
            <div className='menu-container' >
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Mentors</li>
                    <li>Become Mentor</li>
                </ul>
            </div>
        </div>
    )
}
