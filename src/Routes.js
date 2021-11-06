import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Pages
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import NotFound from "./pages/notFound/NotFound";

// Protected Routes
import Dashboard from "./pages/dashboard/Dashboard";
import Transaction from "./pages/dashboard/Transaction";
import Wallet from "./pages/dashboard/Wallet";

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
            <PrivateRoute exact path='/dashboard/transaction' component={Transaction} />
            <PrivateRoute exact path='/dashboard/wallet' component={Wallet} />
            <Route path="*">
                <NotFound />
            </Route>
        </Switch>
    </Router>
);

export default Routes;