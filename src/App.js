import './App.css';
import {Login, getToken} from './components/login';
import Home from './pages/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState} from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import {useDataLayerValue} from "./DataLayer";

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useDataLayerValue();

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
    }
    console.log("token saya", token);
  }, []);

  console.log("user hihi", user);
  console.log("token hihi", token);
  
  return (
    <div className="App">
      {
        token ? 
          <Home spotify={spotify}/>
        : ( <Login /> )
      }
   
    </div>
  );
}

export default App;
