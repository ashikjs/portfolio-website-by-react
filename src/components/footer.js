import React from 'react';
var FontAwesome = require('react-fontawesome');
export default class Footer extends React.Component {

    render() {
        return (
            <div>
                <div class="footer_section">
                    <div class="container">
                        <div class="col-md-4 col-md-push-8 col-sm-4 col-sm-push-8">
                            <ul class="social">
                                <li><a href="#"><FontAwesome name='facebook-square' /></a></li>
                                <li><a href="#"><FontAwesome name='twitter' /></a></li>
                                <li><a href="#"><FontAwesome name='linkedin-square' /></a></li>
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
