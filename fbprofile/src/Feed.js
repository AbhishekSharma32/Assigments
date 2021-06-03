/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import "./Feed.css";
import MessageSender from './MessageSender';
import Post from './Post';

function Feed() {
    return (
        <div className="content">
             <div className='content_grid'>
            <div className="content_left">
                <h1>Intro</h1>
                <p> 
<i class="fa fa-home"/> {' '} Lives in Delhi</p>
                <p> <i class="fa fa-heart"/> {' '} Single </p>
                <p> <i class="fa fa-home"/> {' '} Lives in Delhi</p>
                <p><i class="fa fa-clock-o"/> {' '}Join on Jan 2020 </p>
                <p> <i class="fa fa-rss"/>{' '}Followed by 101 People</p>
            </div>
           
   
<div class="grid_container">
   

  <div class="grid_item"><img src="smile.jpg"/>   </div>
  <div class="grid_item"><img src="ben1.jpg"/></div>
  <div class="grid_item"><img src="banner.jpg"/></div>  
  <div class="grid_item"><img src="one.jpg"/></div>
  <div class="grid_item"><img src="space.jpeg"/></div>
  <div class="grid_item"><img src="image.jpg"/></div>  
  <div class="grid_item"><img src="ben.jpg"/></div>
  <div class="grid_item"><img src="smile.jpg"/></div>
  <div class="grid_item"><img src="logo.jpg"/></div>  
  </div>

            </div>
         <div className="content_right">
                <MessageSender/>
                <Post/>
             </div> 
            
        </div>
    )
}

export default Feed
