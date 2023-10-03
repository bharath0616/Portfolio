import 'index.scss'

const About = () => {
    return(
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
    )
}
export default About;