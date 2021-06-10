/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
 import MenuSection from './MenuSection';
import "./Top.css"

function Top() {
    return (
        <div className="upper_top">
        <div className="top">
             <div className="top_banner">
                <img src="banner1.jpg" /> 
             <div className="cover">
                   <div className="cover_L"><img src="camera.png"/> </div> 
                   <div className="cover_R">Edit Cover Photo
                       </div>
                    </div>  
            </div> 
         <div className="profile_photo">
                <img src="ben1.jpg" />
                <div className="profile_icon">
                     <img src="camera.png"/></div>
            </div> 
             <div className="top_name"> 
                  <h1>Abhishek  Sharma </h1>
                  <p>Add Bio</p>
                  
                 
                  </div> 
          <MenuSection/>  


        </div>
        </div>
    );
}

export default Top
