import React from 'react';
import myResume from '../../assets/Resume.pdf';
import '../../components/resume/resume.css'


export default function Resume() {
    return (
      <div>
        <h1 className="resume">My Resume</h1>
        <div className="pdf-container">
        {/* <iframe className="pdf" src="https://drive.google.com/file/d/1tQHfsTKi67Iz1kbUd6ij4uCkyCHL7jGL/view?usp=sharing" style={{
    width: "718px",
   height: "700px"
}}></iframe> */}
<iframe className="pdf" src={myResume} style={{
    width: "718px",
   height: "700px"
}}></iframe>
        </div>
      </div>
    );
  }