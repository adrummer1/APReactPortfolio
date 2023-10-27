// eslint-disable-next-line no-unused-vars
import React from 'react';
import '../../components/footer/footer.css';
import github from '../../assets/github.png';
import linkedin from '../../assets/linkedin.png';
import facebook from '../../assets/facebook.png';

const Footer = () => {
    return (
        <footer className='footer'>
            <a href="https://github.com/adrummer1"><img src={github}></img></a>
            <a className="linkedin" href="https://www.linkedin.com/in/andrew-perkins-8bb09726/"><img src={linkedin}></img></a>
            <a className="facebook" href="https://www.facebook.com/andrew.perkins.1422"><img src={facebook}></img></a>
        </footer>
    )
}

export default Footer;