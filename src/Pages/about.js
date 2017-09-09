import React from 'react';
import HeaderSection from "../components/home/header-section"
import AboutSection from "../components/home/about-section"
import Todos from "../components/about/todos"

export default class About extends React.Component {

    navigate() {
        // console.log(this.props.history);
        // this.props.history.replace('/', null);
    }

    render() {

        return (
            <div>
                <HeaderSection/>
                <AboutSection/>
                <div class="container">
                    <div class="col-md-12">
                        <h1>About pages Rout is working</h1>
                        <h1>{this.props.location.pathname}</h1>

                        {/*<Todos />*/}
                    </div>
                </div>
            </div>
        );
    }
}
