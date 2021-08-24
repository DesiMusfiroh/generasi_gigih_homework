import React from "react";
import "./style.css";
import Header from "../header";

function Body({ spotify }) {
    return (
        <div className="body">
            <Header spotify={spotify} />
        </div>
    )
}

export default Body;
