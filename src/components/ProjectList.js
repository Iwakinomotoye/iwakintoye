import './ProjectList.css';
import arrow from '../assets/images/arrow.svg';

const ProjectList = ({projects}) => {
   
    return (
        <>
            {
                projects.map(project => {
                    let {id, name, description, image, stacks} = project;

                    
                    return (
                        <div key={id} className="project">
                            <div className="project-content">
                                <div className="image-container">
                                    <img src={require("../assets/images/" + image).default} alt={name} />
                                </div>
                                <div className="project-details">
                                    <h1>{name}</h1>
                                    <p>{description}</p>
                                    <div className="stacks">
                                        {
                                            stacks.map(stack => {
                                                return <div className="stack">{stack}</div>
                                            })
                                        }
                                    </div>
                                    {/* add react's link for routing to the details page */}
                                    <button className="link-button">
                                        <span>VIEW DETAILS<img src={arrow} alt="" /></span>
                                    </button>
                                </div>
                            </div>
                            
                            <div className="section-name">
                                <span className="introduction">PROJECTS</span>
                                <span className="small-dash"></span>
                                <span className="small-dash"></span>
                                <span className="dash-one"></span>
                                <span className="small-dash"></span>
                                <span className="small-dash"></span>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default ProjectList;