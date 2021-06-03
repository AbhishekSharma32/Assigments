/* eslint-disable jsx-a11y/alt-text */
import { Avatar } from '@material-ui/core';
import React from 'react';
import ThumbupIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
// import AccountCircleIcon from "@material-ui/icons/AccountCircle";
// import NearMeIcon from "@material-ui/icons/NearMe";
// import{ExpandMoreOutlined} from "@material-ui/icons";

import "./Post.css";

function Post() {
    return (
        <div className="post">
            <div className="post_one">
               <div className="user"> 
               <div><Avatar/> </div>
               <h4>Rahul</h4>
               </div> 
               
                 <p> Good Morning! </p>
                 <img src ="one.jpg"/>
                 
                 <div className="bind">
                 <div className="post_options"> 
                 <div className="post_option">
                     <ThumbupIcon/>
                     <p>Like</p>
                 </div>
                 <div className="post_option">
                     <ChatBubbleOutlineIcon/>
                     <p>Comment</p>
                 </div></div>
                 <div className="post_opt_top">
                 <Avatar/>
                 <form>
                    <input className="post_opt_input" 
                    placeholder={"Write a comment ..."}/>

                </form>
                </div>
                </div>







               </div>
              {/* 2nd post */}

              <div className="post_two">
               <div className="user"> 
               <div><Avatar/> </div>
               <h4>R.D</h4>
               </div> 
               
                 <p> Hey! </p>
                 <img src ="space.jpeg"/>
                 <div className="bind">
                 <div className="post_options"> 
                 <div className="post_option">
                     <ThumbupIcon/>
                     <p>Like</p>
                 </div>
                 <div className="post_option">
                     <ChatBubbleOutlineIcon/>
                     <p>Comment</p>
                 </div></div>
                 <div className="post_opt_top">
                 <Avatar/>
                 <form>
                    <input className="post_opt_input" 
                    placeholder={"Write a comment ..."}/>

                </form>
                </div>
                </div>
                
                 {/* <div className="post_option">
                     <NearMeIcon/>
                     <p>Share</p>
                 </div>
                 <div className="post_option">
                     <AccountCircleIcon/>
                     <ExpandMoreOutlined/> */}
                     
                 {/* </div>  */}
                 </div>
               </div>
            
            
       
    )
}

export default Post
