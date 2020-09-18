import React, { useState, useEffect } from 'react';
import Login from './Login';
import './App.css';
import { getTokenFromUrl } from './spotify';

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash =  getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    if(_token){
      setToken(_token);
    }
  }, []);

  return (
    <div className="app">
      {token ? <h1>logged in</h1>:<Login/>}
    </div>
  );
}

export default App;
