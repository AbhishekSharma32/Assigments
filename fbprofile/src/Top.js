/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
// import MenuSection from './MenuSection';
import "./Top.css"

function Top() {
    return (
        <div className="top">
            <div className="top_banner">
                <img src="one.jpg" />
                <div className="cover">
                   <div className="cover_L"><img src="camera.png"/> </div> 
                   <div className="cover_R">Edit Cover Photo
                       </div>
                    </div>
            </div>
            <div className="profile_photo">
                <img src="ben1.jpg" />
                <div className="profile_icon"> <img src="camera.png"/></div>
            </div>
            <div className="top_name"> 
                  <h1>Abhishek  Sharma</h1>
                 <h5>Add Bio</h5>
                  </div>
         {/* <MenuSection/> */}


        </div>
    );
}

export default Top
