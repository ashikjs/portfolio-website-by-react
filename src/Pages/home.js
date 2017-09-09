import React from 'react';
import HeaderSection from "../components/home/header-section"
import AboutSection from "../components/home/about-section"
import ServiceSection from "../components/home/service-section"
import PortfolioSection from "../components/home/portfolio-section"
import ClientSection from "../components/home/client-section"
import ContactSection from "../components/home/contact-section"
import Todos from "../components/about/todos"


export default class Home extends React.Component {

    render() {
        return (
            <div>
                <HeaderSection/>
                <AboutSection/>
                <ServiceSection/>
                <PortfolioSection/>

                <ContactSection/>
                {/*<Todos />*/}
                <div class="container">
                    <div class="col-md-12">
                        <h1>Home pages Rout is working</h1>
                        <h1>{this.props.location.pathname}</h1>
                    </div>
                </div>
            </div>
        );
    }
}
