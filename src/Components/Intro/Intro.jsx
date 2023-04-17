import React from 'react'
import './Intro.css'

const Intro = () => {
    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span >¡Hola! Soy</span>
                    <span >Manuel Castellanos</span>
                    <span >
                        Desarrollador Web Full Stack, amante de la tecnología y comprometido por desarrollador aplicaciones agradables y de mucha calidad.
                    </span>
                </div>

                <button className="button i-button">
                    Contrátame
                </button>
            </div>
            <div className="i-right">
                I am right side
            </div>
        </div>
    )
}

export default Intro
