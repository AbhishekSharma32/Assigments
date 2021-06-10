import React from 'react'
import "./PostSetting.css";
import TocIcon from '@material-ui/icons/Toc';
import SettingsIcon from '@material-ui/icons/Settings';
import AppsIcon from '@material-ui/icons/Apps';
import ReorderIcon from '@material-ui/icons/Reorder';
function PostSetting() {
    return (
         <div className="post_setting">     
         <div className="post_setting_top">
             <h1>Posts</h1>
             <div className="filters">
             <p style={{postion:"relative",top:"-25px",left:"5px"}}>  <TocIcon/></p>
             <p style={{postion:"relative",top:"-85px",left:"30px",fontFamily:"inherit",fontWeight:"500",fontSize:"17px"}}> Filters</p></div>
             <div className="manage">
             <p style={{postion:"relative",top:"-25px",left:"5px"}}>   <SettingsIcon/></p>
             <p style={{postion:"relative",top:"-85px",left:"30px",fontFamily:"inherit",fontWeight:"500",fontSize:"17px"}}> Manage posts</p>

             </div>
             </div>             
    
        <div className="post_setting_bottom">
            <div className="list"> 
            <p style={{postion:"relative",top:"-25px",left:"5px"}}>   <ReorderIcon /></p>
             <p style={{postion:"relative",top:"-84px",left:"30px",fontFamily:"inherit",fontWeight:"500",fontSize:"17px"}}>    List view</p>

            
          
            </div>
            <span className="grid"> 
            
            {/* <i class="fa fa-th-large" aria-hidden="true" style={{postion:"relative",top:"3px"}}></i> */}
            <p style={{postion:"relative",top:"-25px",left:"5px"}}>   <AppsIcon /></p>

             <p style={{postion:"relative",top:"-84px",left:"30px" ,fontFamily:"inherit",fontWeight:"500",fontSize:"17px"}}>     Grid view</p>

            

            </span>

        </div>
        </div>
    );
}

export default PostSetting
