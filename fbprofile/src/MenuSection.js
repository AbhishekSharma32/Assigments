/* eslint-disable react/style-prop-object */
import React from 'react';
import "./MenuSection.css";

function MenuSection() {
    return (
        <div className="menu">
            <div className="menu_inside">
            <div className="menu_inside_l"><div>Post</div>
            <div>About</div>
            <div>Friends</div>
            <div>Photos</div>
            <div> Story Archive</div>
            <div>More <i class="fa fa-sort-down"></i>
 </div></div>
            <div className="menu_inside_r">
            <div className="inside_addStory"> <i class="fa fa-plus-circle" style={{color:"white",fontSize:"28px",paddingTop:"5px"}}/>{' '}
Add to Story</div>
            <div className="inside_profile"> <i class="fa fa-pencil" style={{fontSize:"24px"}}/>{' '}
Edit Profile</div>
            <div className="inside_dot">...</div></div>

             </div>
            
        </div>
    )
}

export default MenuSection
