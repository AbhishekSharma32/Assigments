import { Avatar } from '@material-ui/core'
import React from 'react';
import "./MessageSender.css";
import VideocanIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from 
'@material-ui/icons/InsertEmoticon';
function MessageSender() {
    return (
        <div className="messageSender">
            <div className="messageSender_top">
                <Avatar/>
                <form>
                    <input className="messageSender_input" 
                    placeholder={"What's on your mind ?"}/>

                </form> 
            </div>
             <div className="messageSender_bottom">
                 
                 <div className="messageSender_option">
                  <VideocanIcon style={{color:"red"}} />
                  <h3 >Live Video</h3>                    
                 </div>
                 <div className="messageSender_option">
                  <PhotoLibraryIcon style={{color:"green"}} />
                  <h3 >Photo/Video</h3>                    
                 </div>
                 <div className="messageSender_option">
                  <InsertEmoticonIcon style={{color:"orange"}} />
                  <h3 >Feeling/Activity</h3>                    
                 </div>

                     </div> 
            
        </div>
    );
}

export default MessageSender
