import React from 'react'
import { ProjectElement } from '../ui/ProjectElement';
import { projects } from '../../helpers/projectsText';

export const ProjectsScreen = () => {

    return (
        <div className="container flex-main-project">
            {
                projects.map( project => (
                    <ProjectElement key={project.id} {...project} />
                ))
            }
        </div>
    )
}
