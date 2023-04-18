import React from 'react'
import './Intro.css'
import GitHub from '../../img/github.png'
import LinkedIn  from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import Boy from '../../img/boy.png'
import ThumbUp from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import GlassesImoji from '../../img/glassesimoji.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv'

const Intro = () => {
    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span >¡Hola! Soy</span>
                    <span >Manuel Castellanos</span>
                    <span >
                        Desarrollador Web Full Stack, amante de la tecnología y comprometido con desarrollador aplicaciones agradables y de mucha calidad.
                    </span>
                </div>

                <button className="button i-button">
                    Contrátame
                </button>
                
                <div className="i-icons">
                    <a href="https://github.com/manuel101284" target="_blank" rel="noopener noreferrer"><img src={GitHub} alt="Github"></img></a>
                    <a href="https://www.linkedin.com/in/manuelricardocc/" target="_blank" rel="noopener noreferrer"><img src={LinkedIn} alt="LinkedIn"></img></a>
                    <a href="https://www.instagram.com/manuel101284/" target="_blank" rel="noopener noreferrer"><img src={Instagram} alt="Instagram"></img></a>
                </div>           
            </div>
            <div className="i-right">
                <img src={Vector1} alt=""></img>
                <img src={Vector2} alt=""></img>
                <img src={Boy} alt=""></img>
                <img src={GlassesImoji} alt=""></img>
                <div style={{top: '-4%', left: '68%'}}>
                    <FloatingDiv image={Crown} txt1='Desarrollador' txt2='Web'/>
                </div>
                <div style={{top: '18rem', left: '0rem'}}>
                    <FloatingDiv image={ThumbUp} txt1='Diseños' txt2='Geniales'/>
                </div>

                {/* Blur Divs */}
                <div className="blur" style={{background: "rgb(238 210 255)"}}></div>
                <div className="blur" style={{background: "#C1F5FF", top: "17rem", width: "21rem", height: "12rem", left: "-9rem"}}></div>

            </div>
        </div>
    )
}

export default Intro
