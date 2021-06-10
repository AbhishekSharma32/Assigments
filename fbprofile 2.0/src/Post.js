/* eslint-disable jsx-a11y/alt-text */
import { Avatar } from '@material-ui/core';
import React from 'react';
// import ThumbupIcon from '@material-ui/icons/ThumbUp';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
// import AccountCircleIcon from "@material-ui/icons/AccountCircle";
// import NearMeIcon from "@material-ui/icons/NearMe";
// import{ExpandMoreOutlined} from "@material-ui/icons";
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import GifOutlinedIcon from '@material-ui/icons/GifOutlined';
import CameraAltOutlinedIcon from '@material-ui/icons/CameraAltOutlined';
import SentimentSatisfiedOutlinedIcon from '@material-ui/icons/SentimentSatisfiedOutlined';

import "./Post.css";

function Post() {
    return (
        <div className="post">
            <div className="post_one">
                <div className="user">
                    <div><Avatar /><img src="image.jpg" /> </div>
                    <h4>Jyoti Singh <strong style={{ color: "grey", fontFamily: "inherit", fontWeight: "600", fontSize: ".9375rem" }}>is with</strong> {''}
               Rahul Rawat <strong style={{ color: "grey", fontFamily: "inherit", fontWeight: "600", fontSize: ".9375rem" }}>and</strong> 48 others</h4>
                </div>
                <div className="dots">...</div>

                <p style={{ color: "black" }}> Good Morning! </p>
                <img src="one.jpg" />

                <div className="bind">
                    <div className="post_options">
                        <div className="post_option">
                            <ThumbUpAltOutlinedIcon />
                            < p style={{ color: "grey", postion: "relative", top: "-9px" }}>Like</p>
                        </div>
                        <div className="post_option">
                            <ChatBubbleOutlineIcon />
                            <p style={{ color: "grey", postion: "relative", top: "-9px" }}>Comment</p>
                        </div></div>
                    <div className="post_opt_top">
                        {/* <Avatar />  */}
                        <img src="ben1.jpg" />
                        <div className="post_opt_top_online">{""}</div>
                        <form>
                            <input className="post_opt_input"
                                placeholder={"Write a comment ..."} />

                        </form>
                        <div className="post_opt_input_sym">
                            <SentimentSatisfiedOutlinedIcon />
                            <CameraAltOutlinedIcon />
                            <GifOutlinedIcon />
                            <ChatBubbleOutlineOutlinedIcon />

                        </div>
                    </div>
                </div>

            </div>


            {/* -----------------------2nd post------------------------------------------------------------- */}
            <div className="post_two">
                <div className="post_one">
                    <div className="user">
                        <div><Avatar /><img src="image.jpg" /> </div>
                        <h4>Sunil Yadav <strong style={{ color: "grey", fontFamily: "inherit", fontWeight: "600", fontSize: ".9375rem" }}>is with</strong> {''}
               Khushi Rawat <strong style={{ color: "grey", fontFamily: "inherit", fontWeight: "600", fontSize: ".9375rem" }}>and</strong> 48 others</h4>
                    </div>
                    <div className="dots">...</div>

                    <p style={{ color: "black" }}> Niagara Falls </p>
                    <img src="Niagara.jpg" />

                    <div className="bind">
                        <div className="post_options">
                            <div className="post_option">
                                <ThumbUpAltOutlinedIcon />
                                < p style={{ color: "grey", postion: "relative", top: "-9px" }}>Like</p>
                            </div>
                            <div className="post_option">
                                <ChatBubbleOutlineIcon />
                                <p style={{ color: "grey", postion: "relative", top: "-9px" }}>Comment</p>
                            </div></div>
                        <div className="post_opt_top">
                            {/* <Avatar />  */}
                            <img src="ben1.jpg" />
                            <div className="post_opt_top_online">{""}</div>
                            <form>
                                <input className="post_opt_input"
                                    placeholder={"Write a comment ..."} />

                            </form>
                            <div className="post_opt_input_sym">
                                <SentimentSatisfiedOutlinedIcon />
                                <CameraAltOutlinedIcon />
                                <GifOutlinedIcon />
                                <ChatBubbleOutlineOutlinedIcon />

                            </div>
                        </div>
                    </div>

                </div>

















            </div>
        </div>



    )
}

export default Post
