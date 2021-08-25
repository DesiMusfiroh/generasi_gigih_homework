import './App.css';
import { Login, getToken } from './components/login';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import Search from './pages/search';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState} from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import { useDataLayerValue } from "./DataLayer";

const spotify = new SpotifyWebApi();
const code = new URLSearchParams(window.location.search).get("code")

function App() {
  const [{ user, token, search }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getToken();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: 'SET_TOKEN',
        token: _token,
      });
   
      spotify.setAccessToken(_token);
      spotify.getMe().then(user => {
        dispatch({
          type: 'SET_USER',
          user: user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: 'SET_PLAYLIST',
          playlists: playlists,
        });
      });

     spotify.getPlaylist("37i9dQZF1DX8lb9hHwQhmN").then((response) => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        })
     });

    }
  }, []);

  return (
    <div className="App">
      {
        token ? 
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Home} spotify={spotify} code={code} />
              <Route path="/search" component={Search} spotify={spotify} />
            </Switch>
          </BrowserRouter>
        : ( <Login /> )
      }
   
    </div>
  );
}

export default App;
