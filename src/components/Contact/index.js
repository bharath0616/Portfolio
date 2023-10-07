import './index.scss';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import { useState,useRef,useEffect } from 'react';
import emailjs from '@emailjs/browser'

const Contact = () => {
    const [letterClass, setLetterClass]=useState('text-animate')
    const [name, setName] = useState(''); 
    const [email, setEmail] = useState(''); 
    const [subject, setSubject] = useState(''); 
    const [message, setMessage] = useState(''); 
    const refForm = useRef();
    useEffect(() => {
         setTimeout(() => {
            setLetterClass('text-animate-hover')
        },3980)      
    },[])
 
    const sendEmail = (e) => {
        e.preventDefault();
        const serviceId='service_v744dz5'
        const templateId='template_3uoviwe'
        const publicKey='KWMHu6ndA21m79j4M'

        const templateParams = {
            from_name: name,
            from_email:email,
            to_name:'Bharath',
            message:message
        }
        emailjs.send(serviceId,templateId,templateParams,publicKey)

    .then(
        (response) => {
       alert('Message sent successfully!',response);
       setName('');
       setEmail('');
       setSubject('');
       setMessage('');
    })
    .catch((error) => {
        alert("Failed to send the message, please try sending again.",error)
    }
    );
    }
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
    <form ref={refForm} onSubmit={sendEmail}>
        <ul>
            <li className='half'>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Name'  required />
            </li>
            <li className='half'>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' required />
            </li>
            <l1>
                <input placeholder='Subject' type='text' onChange={(e) => setSubject(e.target.value)} value={subject} required/>
            </l1>

            <l1>
                <textarea placeholder='Enter your message'type='text' onChange={(e) => setMessage(e.target.value)} value={message} required></textarea>
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