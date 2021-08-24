import './App.css';
import {Login, getToken} from './components/login';
import Home from './pages/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState} from 'react';
import SpotifyWebApi from 'spotify-web-api-js';

const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = getToken();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
      spotify.setAccessToken(_token);
      spotify.getMe().then(user => {
        console.log(user);
      });
    }
  });

  return (
    <div className="App">
      {
        token ? 
          <Home />
        : ( <Login /> )
      }
   
    </div>
  );
}

export default App;
