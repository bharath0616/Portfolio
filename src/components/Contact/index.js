import './index.scss';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import { useState,useEffect } from 'react';

const Contact = () => {
    const [letterClass, setLetterClass]=useState('text-animate')
    useEffect(() => {
         setTimeout(() => {
            setLetterClass('text-animate-hover')
        },3980)
        
    },[])
return(
    <div className='container1-wrapper'>
<div className='container1 contact-page'>
    <div className='text-zone1'>
        <h1>
            <AnimatedLetters
            letterClass={letterClass} 
            strArray={['C','o','n','t','a','c','t','','M','e','😀']}
            idx={16}
             />
        </h1>
        <p>
        Feel free to reach out to me for any inquiries, collaborations, 
        or just a friendly chat about tech and innovation.
         I'm always excited to connect with fellow enthusiasts and  
         my virtual door is always open. Let's explore the world of technology together!"
        </p>
    </div>
    <div className='contact-form'>
    <form>
        <ul>
            <li className='half'>
                <input type="text" name="name" placeholder='Name'  required />
            </li>
            <li className='half'>
                <input type="email" name="email" placeholder='Email' required />
            </li>
            <l1>
                <input placeholder='Subject' type='text' name="subject" required/>
            </l1>

            <l1>
                <textarea placeholder='Enter your message'type='text' name='message' required></textarea>
            </l1>
            <l1>
                <input 
                    type='submit'
                    className='flat-button'
                    value="SEND"
                />
            </l1>
            
        </ul>
    </form>

    </div>
        
</div>
    <Loader type="pacman" />
    </div>
)

}
export default Contact