import React from "react";
import "./style.css";

function Menu({ title, url, Icon}) {
    return (
        <div className="menu">
            {Icon && <Icon className="menu_icon" />}
            {Icon ? <a href={url} >{title}</a> : <p>{title}</p>}
        </div>
    )
}

export default Menu;