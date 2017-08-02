import React from 'react';
import HeaderSection from "../components/home/header-section"
import AboutSection from "../components/home/about-section"

export default class Home extends React.Component {

    navigate(){
         // console.log(this.props);
        // this.props.history.replace('/', null);
    }
    render(){

        return (
            <div>
                <HeaderSection />
                <AboutSection />

                <div class="container">
                    <div class="col-md-12">
                        <h1>Home pages :p lol</h1>
                        <h1>{this.props.location.pathname}</h1>
                    </div>
                </div>
            </div>
        );
    }
}
