/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './Photo.css';
import About from './About';
import Service from './Service';


function Photo() {
    return (
         <div className="wrp">
            <div className="photo">
                <img src="photo.jpg"/>
                 <div className="photo_name">
                    <h1>Jose Niko</h1>
                      <h4>Developer</h4>
                </div> 
                <div className="photo_icon">
                <i class="fa fa-facebook" aria-hidden="true"></i>
                <i class="fa fa-instagram" aria-hidden="true"></i>
                <i class="fa fa-linkedin" aria-hidden="true"></i>
                <i class="fa fa-twitter" aria-hidden="true"></i>
                </div>



               </div>

            <About />
            <Service />
        </div>
    )
}

export default Photo
