import React from 'react';

import {Route} from 'react-router'

// All Pages Call
import Home from "./Pages/home"
import Layout from "./Pages/layout"
import About from "./Pages/About"
import anotherAbout from "./Pages/anothercompoen"
import Topics from './Pages/topis'
import Portfolio from "./Pages/portfolio"
import Service from "./Pages/service"
export default class Routes extends React.Component {

    render(){
        return (
            <div>

                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/service" component={Service}/>
                <Route path="/portfolio" component={Portfolio}/>
                <Route path="/topics" component={Topics}/>
                <Route path='/about/:article' component={anotherAbout}/>

            </div>
        );
    }
}
