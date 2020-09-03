import React from 'react';
import {signinRedirect} from '../services/userService'

function Login() {

    function login(){
        signinRedirect();
    }

    return (
        <div>
            <div>pawel</div>
            <button onClick={() => login()}>Login</button>
        </div>
    )
}



export default Login