import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import SignUp from './views/SignUp';

function App() {
  // useState
  const [connection, setConnection] = useState<string>('');
  
  // connectionTest function
  /*
  const connectionTest = () => {
    // get connection
    axios.get('http://localhost:4000/')
    .then((rep) => {
      // set connection status
      setConnection(rep.data);
    })
    .catch((err) => {
      // error handling => message
      setConnection(err.message);
    });
  };

  // useEffect : 특정 state값이 실행될때 한번 실행시켜주는 역할
  useEffect(() => {
    // connectionTest callback
    connectionTest(); 
  }, []); // [] : 안에 값이 비어져 있으면 최초 1회 실행시만 call함

  */

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* connection state */}
        {/* <p>{connection}</p> */}
      </header>
      {/* SignUp Call */}
      <SignUp />
    </div>
  );
}

export default App;
