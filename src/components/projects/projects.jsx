/* eslint-disable react/jsx-key */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import '../projects/projects.css';
import Project from '../project/project.jsx';
import Project1 from '../../assets/PWATextEditorAP.png';
import Project2 from '../../assets/CodingQuizChallenge.png';
import Project3 from '../../assets/WeatherDashboard.png';
import Project4 from '../../assets/WorkdayScheduler.png';
import Project5 from '../../assets/PasswordGenerator.png';
import Project6 from '../../assets/Refactoring.png';

// Displaying projects by including screenshot, title, and links to github and deployed applications.
const Projects = () => {
  const projectArray = [
    {
      title: "Text Editor",
      deployed: "https://still-eyrie-95093-c11411e8dfb7.herokuapp.com/",
      gitHub: "https://github.com/adrummer1/PWATextEditorAP",
      image: Project1
    },
    {
      title: "Code Quiz",
      deployed: "https://adrummer1.github.io/CodeQuizAP/",
      gitHub: "https://adrummer1.github.io/CodeQuizAP/",
      image: Project2
    },
    {
      title: "Weather Dashboard",
      deployed: "https://adrummer1.github.io/WeatherDashboardAP/",
      gitHub: "https://github.com/adrummer1/WeatherDashboardAP",
      image: Project3
    },
    {
      title: "Work Day Scheduler",
      deployed: "https://adrummer1.github.io/APWorkDayScheduler/",
      gitHub: "https://github.com/adrummer1/APWorkDayScheduler",
      image: Project4
    },
    {
      title: "Password Generator",
      deployed: "https://adrummer1.github.io/PasswordGeneratorAP/",
      gitHub: "https://github.com/adrummer1/PasswordGeneratorAP",
      image: Project5
    },
    {
      title: "Horiseon Refactoring",
      deployed: "https://adrummer1.github.io/PerkinsChallenge1",
      gitHub: "https://github.com/adrummer1/PerkinsChallenge1",
      image: Project6
    }
  ]
  return (
    <section id='projects'>
      <h2 className="projectsTitle">My Projects</h2>
      {
        projectArray.map(project => {
          return (
              < Project project = {project} />
          ) 
        }) 
      }
    </section>
  );
}

export default Projects;