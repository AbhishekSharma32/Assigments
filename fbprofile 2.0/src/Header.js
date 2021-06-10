/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
// import Home from "@material-ui/icons/Home";
// import FlagIcon from "@material-ui/icons/Flag";
// import GooglePhoto from 'react-google-photo';
import SubscriptionsOutlinedIcon from
    "@material-ui/icons/SubscriptionsOutlined";
import StorefrontOutlinedIcon from
    "@material-ui/icons/StorefrontOutlined";
import SupervisedUserCircleIcon from
    "@material-ui/icons/SupervisedUserCircle";
import { Avatar,IconButton } from '@material-ui/core';
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExposurePlus1Icon from '@material-ui/icons/ExposurePlus1';
// import { grey } from '@material-ui/core/colors';



function Header() {
    return (
        <div className="header">
            <div className="header_left">
                <img src="flogo.png" />
                <div className="header_input">
                    <SearchIcon />
                    <input  placeholder="Search Facebook"
                    type="text" />
                </div>
            </div>

            <div className="header_mid">
                <div className="header_option">
                    <HomeOutlinedIcon fontSize="large"   />
                </div>
                {/* <div className="header_option">
                    <FlagIcon fontSize="large" />
                </div> */}
                <div className="header_option">
                    <SubscriptionsOutlinedIcon
                        fontSize="large" />
                </div>
                <div className="header_option_alert">
                {/* <ExposurePlus1Icon/>  */}
               <span style={{color:"white",marginLeft:"6px",fontWeight:"600"}}>2</span> 
                </div>
                <div className="header_option">
                    <StorefrontOutlinedIcon fontSize="large" />
                </div>
                <div className="header_option">
                    <SupervisedUserCircleIcon fontSize="large" />
                    <div className="header_option_alert2">
                {/* <ExposurePlus1Icon/>  */}
               <span style={{color:"white",marginLeft:"6px",fontWeight:"600"}}>5</span> 
                </div>
                </div>
                <div className="header_option">
                    {/* <img src="fgaming.svg" style={{width:"20px",height:"30px",color:"gray"}}/> */}
                      <img src="game.png" style={{width:"30px",height:"35px",color:"red"}}/> 
                    
                </div>
            </div>
            <div className="header_right">
                <div className="header_info">
                    {/* <Avatar  />*/}
                     <img src="ben1.jpg"/> 
                    <h4>Abhishek</h4>
                </div>
                <IconButton><AddIcon /></IconButton>
                <IconButton><ForumIcon /></IconButton>
                <IconButton><NotificationsActiveIcon />
                <div className="header_right_alert">
                {/* <ExposurePlus1Icon/>  */}
               <span style={{color:"white",marginLeft:"1px",position:"relative",bottom:"5px",fontWeight:"500",fontSize:"18px"}}>15+</span> 
                </div></IconButton>
                <IconButton><ExpandMoreIcon /></IconButton>

            </div>

        </div>
    )
}

export default Header
