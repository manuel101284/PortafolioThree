import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="n-wrapper">
            {/* Left */}
            <div className="n-left">
                <div className="n-name">
                    Manuel
                </div>
                <span >toogle</span>
            </div>

            {/* Right */}
            <div className='"n-right'>
                <div className="n-list">
                    <ul style={{listStyleType: 'none'}}>
                        <li>Home</li>
                        <li>Sobre mi</li>
                        <li>Proyectos</li>
                        <li>Testimonios</li>
                        <li>CV</li>                        
                    </ul>
                </div>       
                
                {/* <button className="button n-button">
                    Contacto
                </button> */}
            </div>
        </div>
    )
}

export default Navbar
