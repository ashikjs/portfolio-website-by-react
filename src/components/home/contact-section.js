import React from 'react';

export default class Contact extends React.Component {

    render() {
        return (
            <div>


                <div class="contact_section">
                    <div class="container">
                        <div class="col-md-12">
                            <div class="row">
                                <div class="titileContain">
                                    <h2>Contact <span class="color-pp">With Me</span></h2>
                                    <ul class="titleLine">
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                    </ul>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                        has been
                                        the industry's standard dummy text ever since the 1500s, when an unknown printer took
                                        ... </p>
                                </div>
                                <div class="col-md-6">
                                    <div class="contactForm">
                                        <div class="inputBox">
                                            <span><i class="fa fa-user-o" aria-hidden="true"></i></span>
                                            <input type="text" placeholder="Name" required></input>
                                        </div>
                                        <div class="inputBox">
                                            <span><i class="fa fa-envelope-open-o" aria-hidden="true"></i></span>
                                            <input type="email" placeholder="E-mail" required></input>
                                        </div>
                                        <div class="textBox">
                                            <span><i class="fa fa-pencil-square-o" aria-hidden="true"></i></span>
                                            <textarea rows="6" placeholder="Message!" required></textarea>
                                        </div>
                                        <a class="contactBtn" href="#" role="button">Send Message</a>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="address">

                                        <div class="col-md-6">
                                            <div class="addressBox">
                                                <h3><i class="fa fa-map-o" aria-hidden="true"></i> Address</h3>
                                                <p> Ka-244, Pragati Ave, Dhaka, Bangladesh</p>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="addressBox">
                                                <h3><i class="fa fa-globe" aria-hidden="true"></i> website </h3>
                                                <p><a href="#">www.jamunafuturepark.com</a></p>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="addressBox">
                                                <h3><i class="fa fa-mobile-phone" aria-hidden="true"></i> Mobile</h3>
                                                <p>+880 2-8413772 <br/> +880 2-8413773</p>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="addressBox">
                                                <h3><i class="fa fa-envelope-open-o" aria-hidden="true"></i> E-mail</h3>
                                                <p>jamuna@info.com</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}