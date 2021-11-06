import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

// Pages
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import NotFound from "./pages/notFound/NotFound";
import Dashboard from "./pages/dashboard/Dashboard";

import PrivateRoute from './PrivateRoute';

const Routes = (props) => (
    <Router {...props}>
        <Switch>
            <Route path="/login">
                <Login />
            </Route>
            <Route path="/register">
                <Register />
            </Route>
            <PrivateRoute exact path='/dashboard' component={Dashboard} />
            <Route path="*">
                <NotFound />
            </Route>
        </Switch>
    </Router>
);

export default Routes;