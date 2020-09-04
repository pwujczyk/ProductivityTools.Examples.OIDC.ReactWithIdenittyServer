
import {
    STORE_USER,
    STORE_USER_ERROR
} from './types'

export function storeUser(user){
    debugger;
    return{
        type:STORE_USER,
        payload:user
    }
}

export function storeUserError(){
    return{
        type: STORE_USER_ERROR
    }
}