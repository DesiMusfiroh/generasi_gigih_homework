import React from 'react';
import './playlist.css';

class Playlist extends React.Component{
    constructor(props) {
        super(props)
        const {album, name, artists} = this.props.data;
        this.state = {
            title: name,
            imageUrl: album.images[1].url,
            artistName: artists[0].name
        }
    }

    render() {
        return (
        <div>
            <h2>Music Playlist</h2>
            <div id="playlists-container">
                <div className="playlist-box">
                    <img src={this.state.imageUrl} alt="album-image" ></img>
                    <h3>{this.state.title}</h3>
                    <p>{this.state.artistName}</p>
                    <button className="btn">Select</button>
                 </div>
            </div>
        </div>
        );
    }
}

export default Playlist;