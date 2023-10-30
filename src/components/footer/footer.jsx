// eslint-disable-next-line no-unused-vars
import React from 'react';
import '../../components/footer/footer.css';

// Displaying footer to include links to github, linkedin and facebook profiles
const Footer = () => {
    return (
        <>
        <footer className='footer'>
            <a href="https://github.com/adrummer1">GitHub</a> &nbsp;&nbsp;|&nbsp;&nbsp;
            <a href="https://www.linkedin.com/in/andrew-perkins-8bb09726/">LinkedIn</a>&nbsp;&nbsp;|&nbsp;&nbsp;
            <a href="https://www.facebook.com/andrew.perkins.1422">Facebook</a>
        </footer>
                <footer className='footer-icon'>
                <a href="https://github.com/adrummer1"><i className="fa-brands fa-github"></i></a> &nbsp;&nbsp;|&nbsp;&nbsp;
                <a href="https://www.linkedin.com/in/andrew-perkins-8bb09726/"><i className="fa-brands fa-linkedin"></i></a>&nbsp;&nbsp;|&nbsp;&nbsp;
                <a href="https://www.facebook.com/andrew.perkins.1422"><i className="fa-brands fa-facebook"></i></a>
            </footer>
        </>
    )
}

export default Footer;