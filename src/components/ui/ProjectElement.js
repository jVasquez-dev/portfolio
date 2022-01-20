import React from 'react';

export const ProjectElement = ({title, img, description, link}) => {
    return (
        <a href={link} target="_blank" className="no-style" rel="noreferrer" >
            <div className="project-element">
            <img alt={title} className="project-img" src={img} />
            <h2 className="my-1 center-text">{title}</h2>
            <p className="simple-text-small">{description}</p>
            </div>
        </a>
        
    )
}
