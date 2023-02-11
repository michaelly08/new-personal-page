import React, {useEffect} from 'react'

const WorkExperience = () => {
    


    

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("workexperience-show");
                }
                // else {
                //     entry.target.classList.remove("show");
                // }
            })
        })
    
        const hiddenElements = document.querySelectorAll(".workexperience-hidden");
        hiddenElements.forEach((el) => observer.observe(el))
    })
    

    




    return (
    <section className="workexperience-container">
        <div className="workexperience-wrapper">


            <div className="workexperience-title">
                WORK EXPERIENCE
            </div>

            <div className="workexperience-subtitle">
                Companies I have worked for in the past.
            </div>

            <div className="workexperience-numbers">
                <div className="workexperience-number workexperience-hidden">
                    <div>01</div>
                    <div><span style={{color: "yellow"}}>Grow More Properties & Investments</span>, Front-End Developer</div>
                    <div>I built the frontend and worked with a back-end developer to help the company build a presence online.</div>
                </div>

                <div className="workexperience-number workexperience-hidden">
                    <div>02</div>
                    <div><span style={{color: "limegreen"}}>Reesby</span>, Front-End/App Developer</div>
                    <div>I was an intern at Reesby and built many apps to help with the company and their client.</div>
                </div>
            </div>

        </div>

    </section>
    )
}

export default WorkExperience