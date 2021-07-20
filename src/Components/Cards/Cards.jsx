import React from 'react';
import './Cards.css';

export default function Cards() {
    return (
        <div className='card-container' data-aos='slide-left'>
            <div className="card">
                <div className="card-head">
                    100K+
                </div>
                <div className="card-text">
                    Mentors available for teaching awesome content.
                </div>
            </div>

            <div className="card">
                <div className="card-head">
                    25K+
                </div>
                <div className="card-text">
                    Students already enrolled in amazing courses. 
                </div>
            </div>

            <div className="card">
                <div className="card-head">
                    5K+
                </div>
                <div className="card-text">
                    Classes conducted everyday. 
                </div>
            </div>

        </div>
    )
}
