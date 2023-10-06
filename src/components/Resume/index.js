import './index.scss';
import Loader from 'react-loaders';
import { useState, useEffect } from 'react';
import AnimatedLetters from '../AnimatedLetters';
const Resume = () => {
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
            strArray={['M','y','','R','e','s','u','m','e']}
            idx={16}
             />
        </h1>
    </div>
        
    </div>
    <Loader type="pacman" />
    </>
)

}
export default Resume