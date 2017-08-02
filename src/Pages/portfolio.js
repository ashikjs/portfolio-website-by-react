import React from 'react';
import Header from "../components/header"
import Footer from "../components/footer"
import { Link } from 'react-router-dom'
export default class Portfolio extends React.Component {
    navigate(){
        // console.log(this.props.history);
        this.props.history.replace('/', null);

    }
    constructor(){
        super();
    }
    changeTitle(title){
        this.setState({title});
    }
    render(){
        return (
            <div>
                <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />

                <h4>This is About Details.............Portfolio </h4>
                <Link to="/about">Check rout link protfolio</Link>
                <Link to="/protfolio">Check rout link protfolio</Link>

                <Footer />

            </div>
        );
    }
}