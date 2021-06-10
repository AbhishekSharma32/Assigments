/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import "./Feed.css";
import MessageSender from './MessageSender';
import Post from './Post';
import PostSetting from './PostSetting';

function Feed() {
    return (
        <div className="content">
             <div className='content_grid'>
            <div className="content_left">
                <h1>Intro</h1>
              <div className="content_left_des">  
              
                <p style={{color:"rgb(117, 115, 115)"}}> <i class="fa fa-home"/> {' '} Lives in <strong style={{color:"black",fontFamily:"inherit", fontWeight:"600",fontSize: ".9375rem"}}>Delhi,India</strong> </p>
                <p style={{color:"rgb(117, 115, 115)"}}> <i class="fa fa-heart"/> {' '} Single </p>
                <p style={{color:"rgb(117, 115, 115)"}}> <i class="fa fa-home"/> {' '} Lives in Delhi</p>
                <p style={{color:"rgb(117, 115, 115)"}}><i class="fa fa-clock-o"/> {' '}Join on Jan 2020 </p>
                <p style={{color:"rgb(117, 115, 115)"}}> <i class="fa fa-rss"/>{' '}Followed by 101 People</p>
                 </div> 
            </div>
           
   
<div class="grid_container">
   <div className="grid_container_heading">
       <h1>Photos</h1>
       <p style={{color:" #1877F2"}} >See All Photos</p>
   </div>


 <div class="grid_item"><img src="smile.jpg" style={{ width:"105px",height:"110px",position:"relative",left:"-50px",top:"-6px",borderTopLeftRadius:"10px",marginLeft:"20px"}}/>   </div>
  <div class="grid_item"><img src="space.jpeg" style={{  width:"105px", height:"110px",position:"relative",left:"-50px",marginLeft:"20px"}}/></div>
  <div class="grid_item"><img src="banner.jpg" style={{  width:"105px",height:"110px",position:"relative",left:"-50px",borderBottomLeftRadius:"10px",marginLeft:"20px"}}/></div> 
 
      <div class="grid_item"><img src="banner.jpg"  style={{ width:"105px", height:"110px",position:"relative",left:"60px", top:"-365px",marginLeft:"40px"}}/></div>
  <div class="grid_item"><img src="image.jpg" style={{ width:"105px", height:"110px",position:"relative",left:"60px", top:"-359px",marginLeft:"40px"}}/></div>
  <div class="grid_item"><img src="ben1.jpg"  style={{ width:"105px", height:"110px",position:"relative",left:"60px", top:"-357px",marginLeft:"40px"}}/></div>

      <div class="grid_item"><img src="one.jpg" style={{ width:"105px", height:"110px",position:"relative",left:"170px", top:"-725px",borderTopRightRadius:"10px",marginRight:"-51px"}}/></div>
  <div class="grid_item"><img src="smile.jpg" style={{width:"105px", height:"110px",position:"relative",left:"170px", top:"-720px",marginRight:"-51px"}}/></div>
  <div class="grid_item"><img src="logo.jpg" style={{width:"105px", height:"110px",position:"relative",left:"170px", top:"-715px",borderBottomRightRadius:"10px",marginRight:"-51px"}}/></div>
  
  </div>

            </div>
         <div className="content_right">
                <MessageSender/>
            
                
                <PostSetting/> 
                

                <Post/>
             </div> 
            
        </div>
    )
}

export default Feed
