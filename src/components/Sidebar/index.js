    import { Link, NavLink } from 'react-router-dom'
    import './index.scss'
    import LogoS from '../../assets/images/logo-s.png'
    import LogoSubtitle from '../../assets/images/logo_sub.png'
    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
    import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'
    import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'


    const Sidebar = () => (
        <div className='nav-bar'>
                <Link className='Logo' to='/'>
                
                <img src={LogoS} alt="logo" />
                <img src={LogoSubtitle} alt="subtitle" />

                </Link>
    <nav>
                <NavLink exact="true" activeclassname="active" to="/">
                    <FontAwesomeIcon icon={faHome} color="#4e4e4e" />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                    <FontAwesomeIcon icon={faUser} color="#4e4e4e" />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                    <FontAwesomeIcon icon={faEnvelope} color="#4e4e4e" />
                </NavLink>

                </nav>

                <ul>
                    <li> {/* /* target='_blank' is used to open the link in new tab */ }
                        <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/bharath-mudduluru-a6a331139'> 
                            <FontAwesomeIcon icon={faLinkedin} color="#4e4e4d" />
                        </a>
                    </li>
                    <li> {/* /* target='_blank' is used to open the link in new tab */ }
                        <a target='_blank' rel='noreferrer' href='https://github.com/bharath0616'> 
                            <FontAwesomeIcon icon={faGithub} color="#4e4e4d" />
                        </a>
                    </li>
                    <li> {/* /* target='_blank' is used to open the link in new tab */ }
                        <a target='_blank' rel='noreferrer' href='https://www.instagram.com/bharath0616/'> 
                            <FontAwesomeIcon icon={faInstagram} color="#4e4e4d" />
                        </a>
                    </li>
                </ul>
        </div>
    )

    export default Sidebar