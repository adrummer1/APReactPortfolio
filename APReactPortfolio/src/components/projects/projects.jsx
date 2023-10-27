// eslint-disable-next-line no-unused-vars
import React from 'react';
import '../projects/projects.css';
import Project1 from '../../assets/PWATextEditorAP.png';
import Project2 from '../../assets/CodingQuizChallenge.png';
import Project3 from '../../assets/WeatherDashboard.png';
import Project4 from '../../assets/WorkdayScheduler.png';

const Projects = () => {
  return (
    <section id='projects'>
      <h2 className="projectsTitle">My Projects</h2>
      <div className="projectImgs">
        <img src={Project1} alt="" className="projectImg" />
        <a className="link" href="https://still-eyrie-95093-c11411e8dfb7.herokuapp.com/">View Deployed Application</a>
        <a className="link" href="https://github.com/adrummer1/PWATextEditorAP">View On GitHub</a>
      </div>
      <div>  
        <img src={Project2} alt="" className="projectImg" />
        <img src={Project3} alt="" className="projectImg" />
        <img src={Project4} alt="" className="projectImg" />
      </div>
    </section>
  );
}

export default Projects;