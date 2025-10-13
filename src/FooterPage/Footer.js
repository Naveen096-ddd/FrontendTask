import React from 'react';
import './footer.css';
import image1 from '../assets/image1.png'
function Footer() {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                <div className="footer-section footer-about">
                    <img src={image1} alt="logo" className='imag' />
                    <p className="footer-texts">
                        Transforming the digital landscape with innovative enterprise software solutions..
                    </p>
                </div>
                <div className="footer-section footer-links">
                    <h3 className="footer-title">Services</h3>
                    <ul className="footer-list">
                        <li className="footer-list-item"><a href="/" className="footer-link">Custom Development</a></li>
                        <li className="footer-list-item"><a href="/" className="footer-link">AI & Machine Learning</a></li>
                        <li className="footer-list-item"><a href="/" className="footer-link">Cloud Solutions </a></li>
                        <li className="footer-list-item"><a href="/" className="footer-link">Mobile & Web Apps</a></li>
                        <li className="footer-list-item"><a href="/" className="footer-link">IoT & Automation</a></li>
                        <li className="footer-list-item"><a href="/" className="footer-link">Enterprise Security</a></li>
                    </ul>
                </div>
                <div className="footer-section footer-links">
                    <h3 className="footer-title">Company</h3>
                    <ul className="footer-list">
                        <li className="footer-list-item"><a href="/" className="footer-link">About Us</a></li>
                        <li className="footer-list-item"><a href="/" className="footer-link">Our Mission</a></li>
                        <li className="footer-list-item"><a href="/" className="footer-link">Contact</a></li>
                        <li className="footer-list-item"><a href="/" className="footer-link">Carrier</a></li>
                        <li className="footer-list-item"><a href="/" className="footer-link">News</a></li>
                        <li className="footer-list-item"><a href="/" className="footer-link">Investor</a></li>
                    </ul>
                </div>
                <div className="footer-section footer-links">
                    <h3 className="footer-title">Resourses</h3>
                    <ul className="footer-list">
                        <li className="footer-list-item"><a href="/" className="footer-link">Case Studies</a></li>
                        <li className="footer-list-item"><a href="/" className="footer-link">Whitepapers</a></li>
                        <li className="footer-list-item"><a href="/" className="footer-link">Documentation</a></li>
                        <li className="footer-list-item"><a href="/" className="footer-link">Support</a></li>
                        <li className="footer-list-item"><a href="/" className="footer-link">Security</a></li>
                        <li className="footer-list-item"><a href="/" className="footer-link">Compliance</a></li>
                    </ul>
                </div>
                <div className="footer-section footer-contact">
                    <h3 className="footer-title">Contact</h3>
                    <p className="footer-text">Email: hr@priaccinnnovations.ai</p>
                    <p className="footer-text">Phone: +1 234 567 890</p>
                    <p className="footer-text">Instagram</p>
                    <p className="footer-text">Youtube</p>
                    <p className="footer-text">Github</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p className="footer-copyright">
                    &copy; {new Date().getFullYear()} Your Company. All rights reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;