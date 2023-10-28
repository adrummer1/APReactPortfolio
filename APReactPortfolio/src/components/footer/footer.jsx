// eslint-disable-next-line no-unused-vars
import React from 'react';
import '../../components/footer/footer.css';
import github from '../../assets/github.png';
import linkedin from '../../assets/linkedin.png';
import facebook from '../../assets/facebook.png';

const Footer = () => {
    return (
        <footer className='footer'>
            <a href="https://github.com/adrummer1">GitHub</a> &nbsp;&nbsp;|&nbsp;&nbsp;
            <a href="https://www.linkedin.com/in/andrew-perkins-8bb09726/">LinkedIn</a>&nbsp;&nbsp;|&nbsp;&nbsp;
            <a href="https://www.facebook.com/andrew.perkins.1422">Facebook</a>
        </footer>
    )
}

export default Footer;