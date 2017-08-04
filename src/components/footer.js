import React from 'react';

export default class Footer extends React.Component {

    render() {
        return (
            <div>
                <div class="footer_section">
                    <div class="container">
                        <div class="col-md-4 col-md-push-8 col-sm-4 col-sm-push-8">
                            <ul class="social">
                                <li><a href="#"><i class="fa fa-facebook-square" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a></li>
                            </ul>
                        </div>
                        <div class="col-md-4 col-md-pull-4 col-sm-6 col-sm-pull-4">
                            <p>React Developer<span>© 2017.All right reserved</span></p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
