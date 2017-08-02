
import React from 'react';
import Header from "../components/header"
import Footer from "../components/footer"
import { Link } from 'react-router-dom'
export default class Portfolio extends React.Component {
    // navigate(){
    //     // console.log(this.props.history);
    //     this.props.history.replace('/', null);
    //
    // }
    // constructor(){
    //     super();
    //     this.state = {title: "Welcome"};
    // }
    // changeTitle(title){
    //     this.setState({title});
    // }
    render(){
        return (
            <div>
                <div class="top-menu">
                    <nav class="navbar navbar-default">
                        <div class="container">
                            <div class="navbar-header">
                                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                                        data-target="#collapse-1" aria-expanded="false">
                                    <span class="sr-only">Toggle navigation</span>
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                </button>
                                <a class="navbar-brand" href="#">MD <span class="color-pp">Ashik</span></a>
                            </div>
                            <div class="collapse navbar-collapse" id="collapse-1">
                                <ul class="nav navbar-nav navbar-right">
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/about">About Ashik</Link></li>
                                    <li><Link to="/service">Service</Link></li>
                                    <li><a href="#">Portfolio</a></li>
                                    <li><a href="#">Blog</a></li>
                                    <li><a href="#">Contact Us</a></li>
                                    <li class="social start">
                                        <a href="#"><i class="fa fa-facebook-square" aria-hidden="true"></i></a></li>
                                    <li class="social"><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                                    <li class="social"><a href="#"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>

            </div>
        );
    }
}
