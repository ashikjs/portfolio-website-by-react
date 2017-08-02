import React from 'react';
import Header from "../components/header"
import Footer from "../components/footer"

import { Route, Link } from 'react-router-dom'
export default class anotherAbout extends React.Component {

    navigate(){
        console.log(this.props.location);
        // this.props.history.replace('/', null);

    }
    render(){
        // const { history }= this.props;
        const { query }= this.props.location.search;
        // const { date, filter }= query;
        // console.log(history.isActive("about"))
        return (
            <div>
                <h1>{this.props.match.params.article}</h1>
                <h1>{query}</h1>
                <button onClick={this.navigate.bind(this)}>button binf</button>
                <Footer />

            </div>
        );
    }
}