import './index.scss';
import Loader from 'react-loaders';
import { useState, useEffect } from 'react';
import AnimatedLetters from '../AnimatedLetters';
const Project = () => {
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
            strArray={['M','y','','P','r','o','j','e','c','t','s']}
            idx={16}
             />
        </h1>
    </div>
        
    </div>
    <Loader type="pacman" />
    </>
)

}
export default Project