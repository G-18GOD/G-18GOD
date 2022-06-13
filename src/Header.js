import React from "react";
import "./Header.css";
import PersonIcon from "@material-ui/icons/Person";
import { IconButton } from "@material-ui/core";
import ForumIcon from "@material-ui/icons/Forum";

function Header(){
    return( 
        <div className="header">
            <IconButton>
            <PersonIcon fontSize="large" className="header__icon" />
            </IconButton>

            <img
            className="header__logo"
            src="https://www.phinfo.tech/wp-content/uploads/2021/06/tinder-app-icon-1-1024x538.png"
            alt=""
            />

            <IconButton>
            <ForumIcon fontSize="large" className="heade__icon" />
            </IconButton>

        </div>
    );
}

export default Header;