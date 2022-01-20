import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
    return (
        <div className="container--footer center-footer">
            <span className="m-1">Copyright © 2021 Jorge Vasquez</span>
            
                <a href='https://github.com/jVasquez-dev' className="m-1 nav-link-small" rel="noreferrer" target="_blank">
                    <FontAwesomeIcon icon={ faGithub } />
                </a>
                <a href='https://www.linkedin.com/in/jorge-vasquez-dev/' className="m-1 nav-link-small" rel="noreferrer" target="_blank">
                    <FontAwesomeIcon icon={ faLinkedin } />
                </a>
            
        </div>
    )
}
