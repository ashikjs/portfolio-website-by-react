import React from 'react';
import ReactDOM from 'react-dom';
// import { Router, Route, Switch } from 'react-router'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'


import Layout from "./Pages/home"
import About from "./Pages/About"
import anotherAbout from "./Pages/anothercompoen"
import Topics from './Pages/topis'
import Portfolio from "./Pages/portfolio"
import './index.css';
// import registerServiceWorker from './registerServiceWorker';

const app = document.getElementById('root');
ReactDOM.render(

    <Router>
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/portfolio">Portfolio</Link></li>
                <li><Link to="/topics">Topics</Link></li>
            </ul>
            <hr/>

            <Route exact path="/" component={Layout}/>
            <Route path="/about" component={About}/>
            <Route path="/portfolio" component={Portfolio}/>
            <Route path="/topics" component={Topics}/>
            <Route path='/about/:article' component={anotherAbout}/>
        </div>
    </Router>


    , app);
