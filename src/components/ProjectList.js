import SectionLabel from './SectionLabel';

import './ProjectList.css';

import arrow from '../assets/images/arrow.svg';
import dots from '../assets/images/dots.svg';

const ProjectList = ({projects}) => {
   
    return (
        <>
            {
                projects.map(project => {
                    let {id, name, description, image, stacks, link} = project;

                    
                    return (
                        <div key={id} className="project">
                            <img src={dots} alt="" className="dots"/>
                            <div className="project-content">
                                <div className="image-container">
                                    <img src={require("../assets/images/" + image).default} alt={name} />
                                </div>
                                <div className="project-details">
                                    <h1>{name}</h1>
                                    <p>{description}</p>
                                    <div className="stacks">
                                        {
                                            stacks.map((stack, index) => {
                                                return <div className="stack" key={index}>{stack}</div>
                                            })
                                        }
                                    </div>
                                    {/* add react's link for routing to the details page */}
                                    <a href={link} target="_blank" rel="noreferrer">
                                        <button className="link-button">
                                            <span>VIEW PROJECT<img src={arrow} alt="" /></span>
                                        </button>
                                    </a>
                                </div>
                            </div>
                            
                            <SectionLabel label="PROJECTS"></SectionLabel>
                        </div>
                    )
                })
            }
        </>
    )
}

export default ProjectList;