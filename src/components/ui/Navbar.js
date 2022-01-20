import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faFileAlt, faHome, faUserCircle} from '@fortawesome/free-solid-svg-icons'


export const Navbar = () => {

    const [activeClass, setactiveClass] = useState(false)

    const handleMenuClick = () => {
        setactiveClass(!activeClass)
    }

    return (
            <nav className="navbar">
                <Link to="/" className="nav-logo">J. Vasquez</Link>
                <ul 
                    className={ `nav-menu ${ activeClass && "active" }` }
                >
                    <li className="nav-item">
                        <Link to="/" className="nav-link" onClick={ () => setactiveClass(false) }>
                            <FontAwesomeIcon icon={faHome} />
                            <span className="nav-text">Home</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link" onClick={ () => setactiveClass(false) }>
                            <FontAwesomeIcon icon={faUserCircle} />
                            <span className="nav-text">About</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/projects" className="nav-link" onClick={ () => setactiveClass(false) } >
                            <FontAwesomeIcon icon={faBriefcase} />
                            <span className="nav-text">Projects</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/resume" className="nav-link" onClick={ () => setactiveClass(false)} >
                        <   FontAwesomeIcon icon={faFileAlt} />
                            <span className="nav-text">Resume</span>
                        </Link>
                    </li>
                </ul>
                <button 
                    className={ `hamburger ${ activeClass && "active" }` }
                    onClick= { handleMenuClick }
                >
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>
            </nav>
    )
}
