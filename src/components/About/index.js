import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders';
const About = () => {
    return(
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        strArray={['A','b','o','u','t',' ','m','e']}
                        idx={15}
                    />
                </h1>
                <p>
                    lorem
                </p>
                <p>

                </p>
                <p>

                </p>
            </div>
        </div>
        <Loader type="pacman" />
        </>
    )
}
export default About;