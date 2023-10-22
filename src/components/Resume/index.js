import './index.scss';
import Loader from 'react-loaders';
import { useState, useEffect } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import React from 'react';
import resume from '../../assets/Resume.pdf'


const Resume = () => {
    const [letterClass, setLetterClass]=useState('text-animate')
    useEffect(() => {
         setTimeout(() => {
            setLetterClass('text-animate-hover')
        },3980)
        
    },[])
return(
    <>
    <div className='container2 Resume-page1'>
    <div className='text-zone2'>
        <h1>
            <AnimatedLetters
            letterClass={letterClass} 
            strArray={['M','y','','R','e','s','u','m','e']}
            idx={16}    
             />
        </h1>
        
    </div>
    <div className='doc'>
    <iframe
        title="PDF Viewer"
        src={resume}
        width="100%"
        height="800" ></iframe>
    </div>

    <div className='download'>
    <a href="resume"className='flat-button'>Download</a>
    </div>
        
    </div>
    <Loader type="pacman" />
    </>
)

}
export default Resume