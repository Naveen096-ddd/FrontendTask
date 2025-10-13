import React,{useState} from 'react';
import './header.css';
import image1  from '../assets/image1.png';
import { Link } from 'react-router-dom';
import Home from '../Pages/HomePage/Home';
import Cards from '../Pages/HomePage/Cards/Cards';
import Gallery from '../Pages/HomePage/Gallery/Gallery';
import Footer from '../FooterPage/Footer';
function Header() {
  return (
    <div className='navhome'>
      <div className='navbar-container'>
      <div className="navbar" style={{position:'fixed',backgroundColor:'#191919'}}>
        <img src={image1} alt="logo" className='img' />
        <div className="topnav">
          <div className='topnav'>
             <Link to='/'>Home</Link>
            <a href="#About">About</a>
          <div className="dropdown">
            <Link to='/'>Services</Link>
            <div className="dropdown-content">
                <a href="#web">Web Development</a>
                <a href="#soft">Software Development</a>
                <a href="#uiux">UI/UX Design</a>
                <a href="#digital">Digital Marketing</a>
                <a href="#graphic">Graphic Design</a> 
                <a href="#seo">SEO Services</a>
            </div>
          </div>
          <a href="#Contact Us">Contact</a>
          <Link to='/signup' type='button'>Signin</Link>
        </div>
        </div>  
      </div>
      </div>
      <Home/>
      <Cards/>
      <Gallery/><br/><br/>
      <Footer/>
    </div>
  );
}
export default Header;
