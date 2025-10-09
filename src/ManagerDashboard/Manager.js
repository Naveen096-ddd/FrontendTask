import React from 'react';
import './manager.css';
import { Link} from 'react-router-dom';
function Manager() {
  return (
    <div className="navhome">
      <div className="navbar-container">
        <div className="navbar" style={{ position: 'fixed', backgroundColor: '#191919' }}>
          <h1 style={{ color: 'white' }}>Manager Dashboard</h1>
          <div className="topnav"></div>
          <Link to="/" className="signin">Logout</Link>
        </div>
      </div>
      <br /><br /><br /><br/>
      <h1>Wellcome to Manager Dashboard</h1>
    </div>
  );
}

export default Manager;
