/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from "@material-ui/icons/Flag";
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



function Header() {
    return (
        <div className="header">
            <div className="header_left">
                <img src="flogo.png" />
                <div className="header_input">
                    <SearchIcon />
                    <input  placeholder="Search"
                    type="text" />
                </div>
            </div>

            <div className="header_mid">
                <div className="header_option">
                    <HomeIcon fontSize="large"  />
                </div>
                <div className="header_option">
                    <FlagIcon fontSize="large" />
                </div>
                <div className="header_option">
                    <SubscriptionsOutlinedIcon
                        fontSize="large" />
                </div>
                <div className="header_option">
                    <StorefrontOutlinedIcon fontSize="large" />
                </div>
                <div className="header_option">
                    <SupervisedUserCircleIcon fontSize="large" />
                </div>
            </div>
            <div className="header_right">
                <div className="header_info">
                    <Avatar />
                    <h4>Abhishek</h4>
                </div>
                <IconButton><AddIcon /></IconButton>
                <IconButton><ForumIcon /></IconButton>
                <IconButton><NotificationsActiveIcon /></IconButton>
                <IconButton><ExpandMoreIcon /></IconButton>

            </div>

        </div>
    )
}

export default Header
