import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [setDate] = useState([]);

  useEffect(()=>
  {
    fetch(`https://localhost:44307/Test/Hi`, {method:"GET"})
    .then(res=>res.json())
    .then(res=>setDate(res));
  })

  return (
    <div className="App">
      <p>Endpoint not secured:</p>
    </div>
  );
}

export default App;
