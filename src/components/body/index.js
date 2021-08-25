import React from "react";
import "./style.css";
import Header from "../header";
import { useDataLayerValue } from "../../DataLayer";
import Track from "../track";

function Body({ spotify, code }) {
    const [{ discover_weekly }, dispatch] = useDataLayerValue();
    return (
        <div className="body">
            <Header spotify={spotify} code={code}/>
            <div className="body_info">
                <img src={discover_weekly?.images[0].url} alt="" />
                <div className="info_text">
                    <strong>PLAYLIST</strong>
                    <h4>Discover Weekly</h4>
                    <p>{discover_weekly?.description}</p>
                    <hr />
                </div>
            </div>
            <div className="body_tracks">
                {discover_weekly?.tracks.items.map((item) => (
                    <Track track={item.track} />
                ))}
            </div>
        </div>
    )
}

export default Body;
