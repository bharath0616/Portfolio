import React from 'react';
import {Link} from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-s.png';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const Home = () => {
    const [letterClass, setLetterClass]=useState('text-animate')
    const nameArray =['h','a','r','a','t','h'];
    const jobArray=['P','r','e','-','F','i','n','a','l','','Y','e','a','r','','S','t','u','d','e','n','t']
    useEffect(() => {
         setTimeout(() => {
            setLetterClass('text-animate-hover')
        },3980)
        
    },[])
    return(
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span>
                <br /> 
                <span className={`${letterClass} _13`}>I'</span>
                <span className={`${letterClass} _14`}>m</span>
                <img src={LogoTitle} alt="developer"/>
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={15} />
                <br />
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx={21} />
                </h1>

                <h2>
                CS | BTech | VIT Vellore
                </h2>
                <Link to="/contact" className="flat-button">CONTACT ME</Link>
            </div>
        </div>
    );
}

export default Home     