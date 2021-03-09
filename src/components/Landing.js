import './Landing.css';
import Header from './Header';

import sitting from '../assets/images/sitting.svg';
import arrow from '../assets/images/arrow.svg';
import dots from '../assets/images/dots.svg';
import myphoto from '../assets/images/myphoto.jpg';
import data from '../data';
import ProjectList from './ProjectList';

import React from 'react';

class Landing extends React.Component {
    constructor(props) {
        super(props);
        this.scrollToProjects = this.scrollToProjects.bind(this);
    }

    scrollToProjects() {
        document.querySelector('.projects').scrollIntoView();
    }

    render() {
        return (
            <div className="landing">
                <Header onChangeTheme={() => this.props.onChangeTheme()}/>
                <div className="section-one">
                    <div className="section-one-content">
                        <div className="left">
                            <h1 className="heading-one">Hi, I am Iwakin Omotoye, I am a frontend developer</h1>
                            <p className="description">
                                I love to build and style performance efficient web pages
                                with great user experience.
                                I am very good with css (scss included). 
                                I am also very good with Javascript and its frameworks 
                                such as Angular, Vuejs, React. I have over 2 years hands-on experience in 
                                front end development.
                            </p>
                            <button className="link-button" onClick={this.scrollToProjects}>
                                <span>See Projects<img src={arrow} alt="" /></span>
                            </button>
                        </div>
                        <div className="right">
                            <img src={sitting} alt="" />
                        </div>
                    </div>
                    <div className="section-name">
                        <span className="section-label">INTRODUCTION</span>
                        <span className="dash-one"></span>
                        <span className="small-dash"></span>
                        <span className="small-dash"></span>
                        <span className="small-dash"></span>
                        <span className="small-dash"></span>
                    </div>
                    <div className="section-oneBg"></div>
                </div>

                <div className="projects">
                    <h1 className="heading-one">My Projects</h1>
                    <ProjectList projects={data} />
                </div>

                <div className="about-me">
                    <img src={dots} alt="" className="dots"/>
                    <div className="about-me-content">
                        <div className="left">
                            <h1 className="heading-one">About Me</h1>
                            <div className="right">
                                <img src={myphoto} alt="" className="my-photo"/>
                            </div>
                            <p className="paragraph"> 
                                I am a frontend developer currently based in Nigeria.
                                I am very proficient using javascript and its frameworks
                                like React, Vue, and Angular. I am also very good with mock
                                up languages such as html and css. I find joy when I
                                use logic to provide solution to challenges thereby solving
                                user potential problems. With over two years of experience in
                                frontend developement, I have been opportuned to build web apps that
                                spread across areas such as education and finance.
                            </p>
                            <p className="paragraph">
                                I was born in Lagos State, Nigeria. I graduated
                                with a second class upper division in Civil Engineering in Nigeria. My love for arithmetic and logic brought
                                me towards the path of software development. I look forward to expanding my
                                dexterity in the backend development.
                            </p>
                        </div>
                    </div>
                    <div className="section-name">
                        <span className="section-label">ABOUT ME</span>
                        <span className="small-dash"></span>
                        <span className="small-dash"></span>
                        <span className="dash-one"></span>
                        <span className="small-dash"></span>
                        <span className="small-dash"></span>
                    </div>
                </div>
            </div>
        )
    }
};

export default Landing;