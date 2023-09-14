import {Link} from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-s.png';
import './index.scss';
import { useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';

const Home = () => {
    const [letterClass, setLetterClass]=useState('text-animate')
    const nameArray =['h','a','r','a','t','h'];
    const jobArray=['P','r','e','-','F','i','n','a','l','','Y','e','a','r','','S','t','u','d','e','n','t'];
    return(
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass}_14`}>i,</span>
                <br /> 
                <span className={`${letterClass}_15`}>I'</span>
                <span className={`${letterClass}_16`}>m</span>
                <img src={LogoTitle} alt="developer"/>
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={17} />
                <br />
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx={24} />
                </h1>

                <h2>
                    BTech | VIT Vellore
                </h2>
                <Link to="/contact" className="flat-button">CONTACT ME</Link>
            </div>
        </div>
    );
}

export default Home     