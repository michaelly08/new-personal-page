import React from 'react'

const Navbar = () => {

    const show = () => {
        document.querySelector(".navbar-container").classList.toggle("is-active");
    }


  return (
    <div className="navbar-container">
        <div className="navbar-wrapper">

            <div className="navbar-logo">
                <div>Michael Ly</div>

                <div className="navbar-menu-button" onClick={show}> 
                    <i className='bx bx-menu-alt-right'></i>
                </div>
            </div>

            
            
            <div className="navbar-options"> 
                <div className="navbar-box">
                    Experience
                </div>

                <div className="navbar-box">
                    Projects
                </div>

                <div className="navbar-box contact-me-button">
                    Contact Me
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Navbar