
// eslint-disable-next-line no-unused-vars
import React from 'react';
import '../about/about.css';
import me from '../../assets/me.jpeg';
import { Link } from 'react-scroll';

const About = () => {
  return (
    <section id="about">
      <div className="aboutContent">
        <span className="intro">Hi!</span>
        <span className="introText">My name is <span className="introName">Andrew</span> <br />Web Developer</span>
        <p className="introGraph">I have 20+ years experience in the publishing industry with a focus on marketing and website projects.</p>
        <Link><button className="btn">My Projects</button></Link>
      </div>
      <img src={me} alt="profile" className="me" />
    </section>
  );
}

export default About;
