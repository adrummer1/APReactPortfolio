// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import '../navbar/navbar.css';
import logo from '../../assets/Aperkins.png';
import { Link } from 'react-scroll';
import hamenu from '../../assets/hamenu.jpeg';

// Displaying Navbar to include logo (name), navigation links, and contact button
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="logo"/>
      <div className="desktopMenu">
        <Link activeClass='active' to='about' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
        <Link activeClass='active' to='about' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">About</Link>
        <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Portfolio</Link>
        <Link activeClass='active' to='resume' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Resume</Link>
      </div>
      <button className="desktopMenuBtn" onClick={() => {
        document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
      }}>
        <img src="" alt="" className="desktopMenuImg" />Contact Me</button>

        <img src={hamenu} alt="Menu" className='hamenu' onClick={()=>setShowMenu(!showMenu)}/>
        <div className="navMenu" style={{display: showMenu? 'flex':'none'}}>
          <Link activeClass='active' to='about' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
          <Link activeClass='active' to='about' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">About</Link>
          <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Portfolio</Link>
          <Link activeClass='active' to='resume' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Resume</Link>
          <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Contact</Link>
      </div>
    </nav>
  )
}

export default Navbar


