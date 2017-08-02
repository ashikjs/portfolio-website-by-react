import React from 'react';
import { NavLink } from 'react-router-dom'

export default class Nav extends React.Component {

    constructor(){
        super();
        this.state = {
            collapsed: true,
        };
    }

    toggleCollapse(){
       const collapsed = !this.state.collapsed;
        this.setState({collapsed});
    }

    navigate(){
    //     console.log(this.props);
    //     // this.props.history.replace('/', null);
    //     // console.log(this.props.location)
    }

    render(){
        const { collapsed } = this.state;
        const navClass = collapsed ? "" : "in";
        return (
            <div>

                <div class="top-menu">
                    <nav class="navbar navbar-default">
                        <div class="container">
                            <div class="navbar-header">
                                <button type="button" class="navbar-toggle collapsed" onClick={this.toggleCollapse.bind(this)}>
                                    <span class="sr-only">Toggle navigation</span>
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                </button>
                                <a class="navbar-brand" href="#">MD <span class="color-pp">Ashik</span></a>
                            </div>
                            <div class={"collapse navbar-collapse " + navClass} id="check123">
                                <ul class="nav navbar-nav navbar-right">
                                    <li><NavLink exact={true} to="/" name="Service" activeClassName="active">Home</NavLink></li>
                                    <li><NavLink to="/about" activeClassName="active">About Ashik</NavLink></li>
                                    <li><NavLink to="/service" activeClassName="active">Service</NavLink></li>
                                    <li><a href="#">Portfolio</a></li>
                                    <li><a href="#" onClick={this.navigate.bind(this)}>Blogs</a></li>
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
