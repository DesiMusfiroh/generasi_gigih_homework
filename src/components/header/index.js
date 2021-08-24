import React from "react";
import "./style.css";
import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { useDataLayerValue } from "../../DataLayer";

function Header() {
    const [{ user }, dispatch] = useDataLayerValue();
    return(
       <div className="header">
            <div className="header_left">
                <SearchIcon />
                <input placeholder="Search for Songs ..." type="text"/>
            </div>
            <div className="header_right">
                <Avatar src={user?.images[0]?.url} alt="ava" />
                <h5>{user?.display_name}</h5>
            </div>
       </div>
    )
}

export default Header;