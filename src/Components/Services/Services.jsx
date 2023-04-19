import React from 'react'
import './Services.css'
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Card from '../Card/Card'
import resume from '../../Documents/MRC_resume_spa.pdf'

const Services = () => {
    return (
        <div className='services'>
            {/*  Left Side */}
            <div className='awesome'>
                <span>Mis</span>
                <span>Servicios</span>
                <span>
                    Me gusta crear aplicaciones útiles
                    <br />
                    Agradables e intuitvas
                </span>

                <a href={resume} target="_blank">
                    <button className='button s-button'>
                        Descarga mi CV
                    </button>
                </a>

                <div className='blur s-blur1' style={{background: "#ABF1FF94"}}></div>
            </div>

            {/* Right Side */}
            <div className='cards'>
                <div style={{left: '14rem'}}>
                    <Card
                        emoji = {HeartEmoji}
                        heading = {'Diseño'}
                        detail = {'Figma, InkScape, GIMP'}
                    />
                </div>

                <div style={{top: '12rem', left: '-4rem'}}>
                    <Card
                        emoji={Glasses}
                        heading={"Desarrollador"}
                        detail={"Html, Css, JavaScript, React"}
                    />
                </div>

                <div style={{top: '19rem', left: '12rem'}}>
                    <Card
                        emoji={Humble}
                        heading={"Full Stack"}
                        detail={"Aplicaciones versátiles y fáciles de usar"}
                    />
                </div>

                <div className='blur s-blur2' style={{background: "var(--purple)"}}></div>

            </div>
        </div>
    )
}

export default Services
