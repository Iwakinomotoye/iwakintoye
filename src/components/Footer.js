import React from 'react';
import './Footer.css';

import linkedIn from '../assets/images/linkedin.svg';
import github from '../assets/images/github.svg';
import twitter from '../assets/images/twitter.svg';

class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <div className="socials">
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/iwakin-omotoye-5b3433100/">
                        <img src={linkedIn} alt=""/>
                    </a>

                    <a target="_blank" rel="noreferrer" href="https://github.com/Iwakinomotoye">
                        <img src={github} alt=""/>
                    </a>

                    <a target="_blank" rel="noreferrer" href="https://twitter.com/Iwakintoye">
                        <img src={twitter} alt=""/>
                    </a>
                </div>
    
                <p>Developed by Iwakin Omotoye. Design by  Madebydammy</p>
            </footer>
        );
    }
}

export default Footer;