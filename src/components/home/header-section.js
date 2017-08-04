import React from 'react';
export default class Header extends React.Component {

    render() {
        return (
            <div>
                <div class="header-section">

                    <div class="header-body text-center">
                        <h1>Hi, I'm <span class="color-pp">Ashik</span></h1>
                        <p>UX/UI Designer and Developer</p>
                        <span class="contact-btn">Contact me</span>
                    </div>
                    <span class="scrollme">
                        <a href="#scroll2">
                            <i class="fa fa-angle-down animation" aria-hidden="true"></i>
                            <i class="fa fa-angle-double-down" aria-hidden="true"></i>
                        </a>
                    </span>
                </div>

            </div>
        );
    }
}
