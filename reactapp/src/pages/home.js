import React, { useState, useEffect } from 'react';
import {signOutRedirect} from '../services/userService'
import { useSelector } from 'react-redux'



function Home() {
  const user = useSelector(state => state.auth.user)
  const [unSecuredDate,setUnSecuredDate] = useState([]);
  const [securedDate,setSecuredDate] = useState([]);


  useEffect(()=>
  {
    
      let x=user;
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
      method:"GET",
      headers: {
        "Authorization":"Bearer "+user.access_token
      },
    })
    .then(res=>res.json())
    .then(res=>setSecuredDate(res));

  },[]);

  function signOut(){
    signOutRedirect();
  }

  return (
    <div className="App">
      <p>Endpoint unSecured:</p>
      <p>{unSecuredDate.hi}</p>
      <p>Endpoint secured</p>
      <p>{securedDate.hi}</p>
      <button onClick={()=>signOut()}>Logout</button>
    </div>
  );
}

export default Home;
