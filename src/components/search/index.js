import React, { useState } from "react";
import "./style.css";
import SearchIcon from "@material-ui/icons/Search";
import { useDataLayerValue } from "../../DataLayer";
import SpotifyWebApi from 'spotify-web-api-js';

const spotify = new SpotifyWebApi();

function Search({ code }) {
    const [search, setSearch] = useState("")
    const [searchResults, setSearchResults] = useState([])
    const [{}, dispatch] = useDataLayerValue();

    spotify.searchTracks(search).then((response) => {
        dispatch({
          type: "SET_SEARCH_TRACKS",
          search: response,
        });
        console.log(response);
      });

    return (
        <div className="search">
            <SearchIcon />
            <input placeholder="Search for Songs or Artists ..." type="text" 
                value={search} 
                onChange={e => setSearch(e.target.value)} />  
        </div>
    )
}

export default Search;