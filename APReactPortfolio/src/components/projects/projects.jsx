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
        <img src={Project2} alt="" className="projectImg" />
        <img src={Project3} alt="" className="projectImg" />
        <img src={Project4} alt="" className="projectImg" />
      </div>
    </section>
  );
}

export default Projects;