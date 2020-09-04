import {UserManager} from 'oidc-client'
import { storeUserError, storeUser } from '../actions/authActions'


const config={
    authority:"https://localhost:5001/",
    client_id:"reactapp",
    redirect_uri:"http://localhost:3000/signin-oidc",
    response_type:"id_token token",
    scope:"openid profile api",
    post_logout_redirect_uri:"http:/localhost"
}

const userManager=new UserManager(config)


export async function loadUserFromStorage(store){
    try{
        let user=await userManager.getUser();
        if (!user){return store.dispatch(storeUserError()) }
        store.dispatch(storeUser(user));
        debugger;
    }
    catch(e){
        console.error(`User not found :${e}`)
        store.dispatch(storeUserError())
    }
}

export function signinRedirect(){
    return userManager.signinRedirect();
}

export function signInRedirectcCallback(){
    return userManager.signinRedirectCallback();
}

export default userManager