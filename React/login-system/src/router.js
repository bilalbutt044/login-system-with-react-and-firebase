import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Signin from "./auth/signin";
import Signup from "./auth/signup";
import Forgot from "./auth/forgot";
import Home from "./home";


export default () => (
    <Router>
        <Switch>
            <Route path="/auth/signup" component={Signup} />
            <Route path="/auth/signin" component={Signin} />
            <Route path="/auth/forgot" component={Forgot} />
            <Route path="/home" component={Home} />

            <Route  component={Signin} />
        </Switch>
    </Router>
)
