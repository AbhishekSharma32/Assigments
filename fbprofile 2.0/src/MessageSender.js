/* eslint-disable jsx-a11y/alt-text */
// import { Avatar } from '@material-ui/core'
import React from 'react';
import "./MessageSender.css";
import VideocanIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
// import InsertEmoticonIcon from 
// '@material-ui/icons/InsertEmoticon';
import FlagIcon from '@material-ui/icons/Flag';
function MessageSender() {
    return (
        <div className="messageSender">
            <div className="messageSender_top">
                {/* <Avatar/> */}
                <img src="ben1.jpg" />
                <form>
                    <input className="messageSender_input"
                        placeholder={"What's on your mind ?"} />

                </form>
            </div>
            <div className="messageSender_bottom">

                <div className="messageSender_option">
                    <VideocanIcon style={{ color: "red", marginTop: "10px" }} />
                    <h3 >Live Video</h3>
                </div>
                <div className="messageSender_option">
                    <PhotoLibraryIcon style={{ color: "green", marginTop: "10px" }} />
                    <h3 >Photo/Video</h3>
                </div>
                <div className="messageSender_option">
                    <FlagIcon style={{ color: "skyBLue", marginTop: "10px" }} />
                    <h3 >Life Event</h3>
                </div>

            </div>

        </div>

 
                     
               
    );          
}

export default MessageSender
