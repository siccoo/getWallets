import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

// Pages
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import NotFound from "./pages/notFound/NotFound";
import Dashboard from "./pages/dashboard/Dashboard";

const Routes = (props) => (
    <Router {...props}>
        <Switch>
            <Route path="/login">
                <Login />
            </Route>
            <Route path="/register">
                <Register />
            </Route>
            <Route path="/dashboard">
                <Dashboard />
            </Route>
            <Route exact path="/">
                <Redirect to="/dashboard" />
            </Route>
            <Route path="*">
                <NotFound />
            </Route>
        </Switch>
    </Router>
);

export default Routes;