import React from "react";
import "./style.css";

function Menu({ title, Icon}) {
    return (
        <div className="menu">
            {Icon && <Icon className="menu_icon" />}
            {Icon ? <h5>{title}</h5> : <p>{title}</p>}
        </div>
    )
}

export default Menu;