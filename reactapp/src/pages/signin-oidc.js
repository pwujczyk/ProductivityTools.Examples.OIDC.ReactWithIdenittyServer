import React, { useEffect } from 'react'
import {signInRedirectcCallback} from '../services/userService'
import {useHistory} from 'react-router-dom'


function SignInOidc(){

    const history=useHistory()
    useEffect(()=>{
        async function signInAsync(){
            await signInRedirectcCallback();
            history.push('/')
        }
        signInAsync()
    },[history])

    return(
        <div>
            Redirecting...
        </div>
    )
}
export default SignInOidc