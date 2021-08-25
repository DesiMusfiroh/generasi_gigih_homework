import React from "react";
import "./style.css";
import { Avatar } from "@material-ui/core";
import { useDataLayerValue } from "../../DataLayer";
import Search from "../search";

function Header({ code }) {
    const [{ user }, dispatch] = useDataLayerValue();
    return(
       <div className="header">
            <Search code={code} />
            <div className="header_right">
                <Avatar src={user?.images[0]?.url} alt="ava" />
                <h5>{user?.display_name}</h5>
            </div>
       </div>
    )
}

export default Header;