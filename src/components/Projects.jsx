import React from 'react'
import Project1 from "./img/Project1.jpg"
import Project2 from "./img/Project2.jpg"
import Project3 from "./img/Project3.jpg"



const Projects = () => {
  return (
    <div className="projects-container">
        <div className="projects-wrapper">

            <div className="projects-side">
                <div className="projects-titles">
                    <div className="workexperience-title">
                        MY PROJECTS
                    </div>
                    <div className="workexperience-subtitle">
                        Work that I have done
                    </div>
                </div>

                <div className="projects-box">
                    <div className="projects-image">
                        <img src={Project1}></img>
                    </div>
                    <div className="projects-texts">
                        <div className="projects-name">
                            Project 1
                        </div>
                        <div className="projects-description">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati nemo eaque maiores!
                        </div>
                    </div>
                </div>

                <div className="projects-box">
                    <div className="projects-image">
                        <img src={Project3}></img>
                    </div>
                    <div className="projects-texts">
                        <div className="projects-name">
                            Project 3
                        </div>
                        <div className="projects-description">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati nemo eaque maiores!
                        </div>
                    </div>
                </div>




                
            </div>

            <div className="projects-side">

                <div className="projects-box">
                    <div className="projects-image">
                        <img src={Project2}></img>
                    </div>
                    <div className="projects-texts">
                        <div className="projects-name">
                            Project 2
                        </div>
                        <div className="projects-description">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati nemo eaque maiores!
                        </div>
                    </div>
                </div>




            </div>
            
        </div>
    </div>
  )
}

export default Projects