import {UserManager} from 'oidc-client'


const config={
    authority:"https://localhost:5001/",
    client_id:"reactapp",
    redirect_uri:"https://localhost:5002/signin-oidc",
    response_type:"id_token token",
    scope:"openid profile api",
    post_logout_redirect_uri:"http:/localhost"
}

const userManager=new UserManager(config)

export function signinRedirect(){
    return userManager.signinRedirect();
}