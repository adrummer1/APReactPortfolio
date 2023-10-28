
// eslint-disable-next-line no-unused-vars
import React from 'react';
import '../about/about.css';
import me from '../../assets/me.jpeg';

const About = () => {
  return (
    <section id="about">
      <div className="aboutContent">
        <span className="intro">Hi!</span>
        <span className="introText">My name is <span className="introName">Andrew</span> <br />and I am a <span className="title">Web Developer</span></span>
        <p className="introGraph">I have 20+ years experience in the publishing industry with a focus on marketing, UX/UI design, and ecommerce. Keep scrolling to check out some of my work!</p>
      </div>
      <img src={me} alt="profile" className="me" />
    </section>
  );
}

export default About;
