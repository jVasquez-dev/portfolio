import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
    return (
        <div className="container--footer center-footer">
            <span className="m-1">Copyright © 2021 Jorge Vasquez</span>
            
                <Link className="m-1 nav-link-small">
                    <FontAwesomeIcon icon={ faGithub } />
                </Link>
                <Link className="m-1 nav-link-small">
                    <FontAwesomeIcon icon={ faLinkedin } />
                </Link>
            
        </div>
    )
}
