import './index.scss';
import {
    faNodeJs,
    faCss3,
    faGitAlt,
    faPython,
    faJsSquare,
    faReact,
  } from '@fortawesome/free-brands-svg-icons'

import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState,useEffect } from 'react';


const About = () => {
    const [letterClass, setLetterClass]=useState('text-animate')
    useEffect(() => {
         setTimeout(() => {
            setLetterClass('text-animate-hover')
        },3980)
        
    },[])
return(
    <>
    <div class="top-container">
    <div className='container about-page about-container'>
    <div className=' about-text-zone'>
    
        <h1>
            <AnimatedLetters
            letterClass={letterClass} 
            strArray={['A','b','o','u','t','','M','e']}
            idx={16}
             />
        </h1>
        <p>
            About me, I am <span>Bharath Mudduluru</span> from <span>Hyderabad,India.</span>
            
          </p>
         
          <p>
          I am a pre-final year student pursuing BTech in Computer science and engineering with specialization in business systems.
          </p>
          <p>
            Few of my hobbies include
             Playing Games,Cubing,Travelling
          </p>
          <p>
            You can look into my resume in next section for more information!
          </p>
    </div>

    <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faNodeJs} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faPython} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
         
        </div> 
       
    </div>
    <div className='Resume'>
  <Link to="/resume" className='flat-button'>RESUME</Link>
</div> 
    </div>
   

    
  
    <Loader type="pacman" />
    </>
    
)
}
export default About;