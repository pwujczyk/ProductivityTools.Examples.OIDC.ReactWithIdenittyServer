import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [unSecuredDate,setUnSecuredDate] = useState([]);
  const [securedDate,setSecuredDate] = useState([]);
 

  useEffect(()=>
  {
    fetch(`https://localhost:44307/Test/Hi`, {
      mode: 'cors',
      crossDomain: true,  
      method:"GET"
    })
    .then(res=>res.json())
    .then(res=>setUnSecuredDate(res));

    fetch(`https://localhost:44307/Test/HiSecure`, {
      mode: 'cors',
      crossDomain: true,  
      method:"GET"
    })
    .then(res=>res.json())
    .then(res=>setSecuredDate(res));

  },[]);

  return (
    <div className="App">
      <p>Endpoint unSecured:</p>
      <p>{unSecuredDate.hi}</p>
      <p>Endpoint secured</p>
      <p>{securedDate.hi}</p>
    </div>
  );
}

export default App;
