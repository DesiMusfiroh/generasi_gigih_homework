import React from 'react';
import './style.css';
import Button from '@material-ui/core/Button';
import { useDataLayerValue } from "../../DataLayer";

function Track({ track }) {
    const [{ search }, dispatch] = useDataLayerValue();
    return (
      <div className="track">
        <img className="track_image" src={track.album.images[0].url} alt="track_image" />
        <div className="track_info">
          <h3>{track.name}</h3>
          <p>
            {track.artists.map((artist) => artist.name).join(", ")} -{" "}
            {track.album.name}
          </p>
        </div>
        <div className="track_btn" >
          <Button variant="contained" color="secondary">Select</Button>
        </div>
      </div>
    );
  }

// class Track extends React.Component {
//     constructor(props) {
//         super(props)
//         const {album, name, artists} = this.props.data;
//         this.state = {
//             title: name,
//             imageUrl: album.images[1].url,
//             artistName: artists[0].name
//         }
//     }

//     render() {
//         return(
            // <div className="track-item">
            //     <img src={this.state.imageUrl} alt="album-image" ></img>
            //     <h3>{this.state.title}</h3>
            //     <p>{this.state.artistName}</p>
            //     <button className="btn">SELECT TRACK</button>
            // </div>
//         );
//     }
// }

export default Track;