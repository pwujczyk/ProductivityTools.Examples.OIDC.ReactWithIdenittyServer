import React from 'react'
import { Route, Redirect } from 'react-router-dom'


function PrivateRoute({ childre, component: Component, ...rest }) {

    return (
    <Route{...rest} component={Component}></Route>
    )
}

export default PrivateRoute;