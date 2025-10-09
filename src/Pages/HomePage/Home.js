import React from "react";
import './home.css';
import Home1 from '../../assets/image2.png';
function Home() {
  return (
    <div className="home">
        <div className="home-content">
            <div className="home-image">
              <img src={Home1} alt="Home Image"  className="homeimg"/>
              <h1 className="content">Empowering Business With Smart Scalable TechSolutions</h1>
            </div>
            <div className="quotes">
              <h3>What We Believe</h3><hr/>
              <ul>
                <li>Innovating your digital future, today.</li>
                <li>Empowering businesses through technology.</li>
                <li>Transforming ideas into digital reality.</li>
                <li>Your trusted partner in IT solutions.</li>
              </ul>
            </div>
        </div>
    </div>
  );
}
export default Home;