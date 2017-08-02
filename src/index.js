import React from 'react';
import ReactDOM from 'react-dom';
// import { Router, Route, Switch } from 'react-router'
import {BrowserRouter as Router} from 'react-router-dom'

import Routes from "./route"
import Nav from "./components/nav"
import Footer from "./components/footer"
import './index.css';
import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory();
const app = document.getElementById('root');
ReactDOM.render(

    <Router >
        <div>
            <Nav history={history} />
            <Routes />
            <Footer />
        </div>
    </Router>
    , app);
