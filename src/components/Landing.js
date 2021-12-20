import './Landing.css';
import Header from './Header';
import Footer from './Footer';
import SectionLabel from './SectionLabel';

import sitting from '../assets/images/sitting.svg';
import arrow from '../assets/images/arrow.svg';
import dots from '../assets/images/dots.svg';
import myphoto from '../assets/images/myphoto.jpg';
import directionLine from '../assets/images/direction-line.svg';
import javascript from '../assets/images/javascript.svg';
import angular from '../assets/images/angular.svg';
import vue from '../assets/images/vuejs.svg';
import react from '../assets/images/react.svg';
import html from '../assets/images/html.svg';
import node from '../assets/images/node.svg';
import sass from '../assets/images/sass.svg';

import projectData from '../project-data';
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
                                I am very good with HTML5, CSS3 (SCSS included). 
                                I am also very good with JavaScript and its frameworks 
                                such as Angular, Vuejs, React. I have over 2 years professional experience in 
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
                    <SectionLabel label="INTRODUCTION"></SectionLabel>
                    <div className="section-oneBg"></div>
                </div>

                <div className="projects">
                    <h1 className="heading-one">My Projects</h1>
                    <ProjectList projects={projectData} />
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
                                user potential problems. With three years of experience in
                                frontend developement, I have been opportuned to build web apps that
                                spread across different sectors such as education, estate management and finance.
                            </p>
                            <p className="paragraph">
                                I was born in Lagos State, Nigeria. I graduated
                                with a second class upper division in Civil Engineering in Nigeria. My love for arithmetic and logic brought
                                me towards the path of software development. I look forward to expanding my
                                dexterity in the backend development.
                            </p>
                        </div>
                    </div>
                    <SectionLabel label="ABOUT ME"></SectionLabel>
                </div>

                <div className="work-experience">
                    <h1 className="heading-one">Work Experience</h1>
                    <div className="experiences">
                        <div className="experience-list">
                            {/* <div className="experience-card">
                                <h2>Frontend Developer</h2>
                                <h4>Printrite.ng</h4>
                                <ul>
                                    <li>Created a web application for real estate agents using vue.js.</li>
                                    <li>Created a school management web application using vue.js.</li>
                                </ul>
                            </div> */}

                            <div className="experience-card">
                                <h2>Software Developer</h2>
                                <h4>Reach.africa</h4>
                                <ul>
                                    <li>Wrote Javascript functions to make html table downloadable as pdf files.</li>
                                    <li>Improved Reach’s website performance by 20%</li>
                                    <li>Implemented paystack payment API on the frontend.</li>
                                </ul>
                            </div>

                            <img src={directionLine} alt=""/>
                            
                            <div className="experience-card">
                                <h2>Frontend Developer</h2>
                                <h4>getbumpa.com</h4>
                                <ul>
                                    <li>Worked with the team in building a fully functional storefront.</li>
                                    <li>Ensured performance efficient standards while building the web application.</li>
                                    <li>Used chartjs to implement bar and pie charts to fit custom design.</li>
                                </ul>
                            </div>

                            <img src={directionLine} alt=""/>
                            
                            <div className="experience-card">
                                <h2>Where next?</h2>
                                <h4>You decide!</h4>
                                <p>
                                    Make a sweet offer and I might just be your next frontend developer.
                                    You know thats right!
                                </p>
                            </div>
                        </div>
                        <SectionLabel label="EXPERIENCE"></SectionLabel>
                    </div>
                </div>

                <div className="skillset">
                    <h1 className="heading-one">My Skillset</h1>
                    <div className="skills">
                        <div className="skill-container">
                            <div className="skill-list">
                                <img src={html} alt="" />
                                <img src={sass} alt="" />
                                <img src={javascript} alt="" />
                                <img src={vue} alt="" />
                                <img src={react} alt="" />
                                <img src={angular} alt="" />
                                <img src={node} alt="" />
                            </div>
                        </div>
                        <SectionLabel label="SKILLSET"></SectionLabel>
                    </div>
                    <img src={dots} alt="" className="dots"/>
                </div>

                <div className="contact">
                    <div className="contact-me">
                        <div>
                            <h1 className="heading-one">Let’s build Something together</h1>
                            <p>
                                Think I might be the right friend for your next adventure? Take a minute, 
                                I'd love to hear about your project, or need an advice about frontend 
                                development, just drop me a message below. 
                            </p>

                            <p className="email">iwakinomotoye@gmail.com</p>
                        </div>
                        <div>
                            <input type="text" placeholder="Full name"/>

                            <input type="email" placeholder="Email address"/>

                            <textarea placeholder="Message"></textarea>

                            <button>SEND MESSAGE</button>
                        </div>
                    </div>
                    <SectionLabel label="CONTACT"></SectionLabel>
                </div>

                <Footer/>
            </div>
        )
    }
};

export default Landing;