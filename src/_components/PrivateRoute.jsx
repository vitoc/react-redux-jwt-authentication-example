import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, token, ...rest }) => (
    <Route {...rest} render={props => (
        (token !== null)
            ? <Component {...props} />
            : <Redirect to={'/auth'} />
    )} />
)