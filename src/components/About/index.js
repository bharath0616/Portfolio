import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders';
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
    <div className='container contact-page'>
    <div className='text-zone'>
        <h1>
            <AnimatedLetters
            letterClass={letterClass} 
            strArray={['A','b','o','u','t','','M','e']}
            idx={16}
             />
        </h1>
    </div>
        
    </div>
    <Loader type="pacman" />
    </>
)

}
export default About;