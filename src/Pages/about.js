import React from 'react';
import Header from "../components/header"
import Footer from "../components/footer"

import { Route, Link } from 'react-router-dom'
export default class About extends React.Component {

    navigate(){
        console.log(this.props);
        // this.props.history.replace('/', null);
    }
    render(){
        return (
            <div>
                {/*<Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />*/}
                <h4>This is About Details............. About  </h4>
                <Footer />

            </div>
        );
    }
}