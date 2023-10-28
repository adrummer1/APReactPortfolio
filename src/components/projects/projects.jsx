// eslint-disable-next-line no-unused-vars
import React from 'react';
import '../projects/projects.css';
import Project1 from '../../assets/PWATextEditorAP.png';
import Project2 from '../../assets/CodingQuizChallenge.png';
import Project3 from '../../assets/WeatherDashboard.png';
import Project4 from '../../assets/WorkdayScheduler.png';
import Project5 from '../../assets/PasswordGenerator.png';
import Project6 from '../../assets/Refactoring.png';

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
        <a className="link" href="https://adrummer1.github.io/CodeQuizAP/">View Deployed Application</a>
        <a className="link" href="https://github.com/adrummer1/CodeQuizAP">View On GitHub</a>
      </div>
      <div>  
        <img src={Project3} alt="" className="projectImg" />
        <a className="link" href="https://adrummer1.github.io/WeatherDashboardAP/">View Deployed Application</a>
        <a className="link" href="https://github.com/adrummer1/WeatherDashboardAP">View On GitHub</a>
      </div>
      <div>  
        <img src={Project4} alt="" className="projectImg" />
        <a className="link" href="https://adrummer1.github.io/APWorkDayScheduler/">View Deployed Application</a>
        <a className="link" href="https://github.com/adrummer1/APWorkDayScheduler">View On GitHub</a>
      </div>
      <div>  
        <img src={Project5} alt="" className="projectImg" />
        <a className="link" href="https://adrummer1.github.io/PasswordGeneratorAP/">View Deployed Application</a>
        <a className="link" href="https://github.com/adrummer1/PasswordGeneratorAP">View On GitHub</a>
      </div>
      <div>  
        <img src={Project6} alt="" className="projectImg" />
        <a className="link" href="https://adrummer1.github.io/PerkinsChallenge1/">View Deployed Application</a>
        <a className="link" href="https://github.com/adrummer1/PerkinsChallenge1">View On GitHub</a>
      </div>
    </section>
  );
}

export default Projects;