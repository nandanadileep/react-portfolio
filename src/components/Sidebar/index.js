import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '/Users/nandana/react-portfolio/src/assets/images/logo-s.png'
import LogoSubtitle from '/Users/nandana/react-portfolio/src/assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import {faUser} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt="logo" />
            <img className="sub-logo" src={LogoSubtitle} alt="logoname" />
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
            </NavLink>
            <NavLink 
            exact="true" 
            activeclassname="active" 
            className="about-link" 
            to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
            </NavLink>
            <NavLink 
            exact="true"  
            activeclassname="active" 
            className="contact-link" 
            to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target='_blank'
                rel='noreferrer'
                href="https://www.linkedin.com/in/nandana-dileep-06935a212/">
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target='_blank'
                rel='noreferrer'
                href="https://github.com/nandanadileep">
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target='_blank'
                rel='noreferrer'
                href="https://www.linkedin.com/in/nandana-dileep-06935a212/">
                    <FontAwesomeIcon icon={faInstagram} color="#4d4d4e" />
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar
