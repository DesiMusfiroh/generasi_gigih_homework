import './App.css';
import {Login, getToken} from './components/login';
import Header from './components/header';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState} from 'react';

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = getToken();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
    }
  });

  return (
    <div className="App">
      {
        token ? 
         <h1>{token}</h1> 
        : ( <Login /> )
      }
   
    </div>
  );
}

export default App;
