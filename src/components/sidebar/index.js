
import React from "react";
import "./style.css";
import Menu from "../menu";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import PlaylistIcon from "@material-ui/icons/LibraryMusic";

function Sidebar() {
    return (
        <div className="sidebar">
            <img src="https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-icon-green-logo-8.png" alt="" className="sidebar_logo"/>
            <Menu title="Home" Icon={HomeIcon} />
            <Menu title="Search" Icon={SearchIcon} />
            <Menu title="Playlist" Icon={PlaylistIcon} />
            <hr/>
            <strong className="sidebar_title">PLAYLISTS</strong>

        </div>
    )
}

export default Sidebar;