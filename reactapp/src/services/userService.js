import {UserManager} from 'oidc-client'


const config={
    authority:"https://localhost:5001/",
    client_id:"reactapp",
    redirect_uri:"http://localhost/comeback",
    response_type:"id_token token",
    scope:"openid profile testapi",
    post_logout_redirect_uri:"http:/localhost"
}

const userManager=new UserManager(config)

export function signinRedirect(){
    return userManager.signinRedirect();
}