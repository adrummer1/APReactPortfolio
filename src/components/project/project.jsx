/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import '../project/project.css';

const Project = ({project}) => {
    return (
        <div>
        <img src={project.image} alt="" className="projectImg" />
        <p className="title">{project.title}</p>
        <a className="link" href={project.deployed}>View Deployed Application</a>
        <a className="link" href={project.gitHub}>View On GitHub</a>
      </div>
    )
}

export default Project