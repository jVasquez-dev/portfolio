import React from 'react';

export const ProjectElement = ({title, img, description, link}) => {
    console.log(title)
    return (
        <a href={link} target="_blank" className="no-style">
            <div className="project-element">
            <img className="project-img" src={img} />
            <h2 className="my-1 center-text">{title}</h2>
            <p className="simple-text-small">{description}</p>
            </div>
        </a>
        
    )
}
