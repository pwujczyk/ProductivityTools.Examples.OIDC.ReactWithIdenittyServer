import React, { useEffect, useRef } from 'react';
import { storeUser } from '../actions/authActions'

export default function AuthProvider({ userManager: manager, store, children }) {
    let userManager = useRef();


    useEffect(() => {
        userManager.current = manager
        const onUserLoaded = (user) => {
            console.log(`user loaded: ${user}`)
            store.dispatch(storeUser(user))
        }

        userManager.current.events.addUserLoaded(onUserLoaded)
    }, [manager, store])

    return (
        React.Children.only(children)
      )

}