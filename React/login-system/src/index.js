import React from "react";
import { render } from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Router from "./router";

import "./style.css";

const App = () => (
    <div>
        <Router />
    </div>
)

render( <App />,  document.getElementById("root") )