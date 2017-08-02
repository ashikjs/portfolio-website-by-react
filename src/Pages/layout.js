import React from 'react';
import { Link } from 'react-router-dom'
import Header from "../components/header"
import Footer from "../components/footer"
export default class Layout extends React.Component {

    navigate(){
        // console.log(this.props.history);
        this.props.history.replace('/', null);

    }
    render(){
        return (
            <div>
                <h4>This is Body Details this is Home </h4>
                <h2> {this.props.location.pathname}</h2>
                <button onClick={this.navigate.bind(this)}>button binf</button>
                <Footer />

            </div>
        );
    }
}