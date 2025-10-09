import React from 'react';
import './student.css';
import { Link} from 'react-router-dom';

function Student() {
  return (
    <div className="navhome">
      <div className="navbar-container">
        <div className="navbar" style={{ position: 'fixed', backgroundColor: '#191919' }}>
          <h1 style={{ color: 'white' }}>Student Dashboard</h1>
          <div className="topnav"></div>
          <Link to="/" className="signin">Logout</Link>
        </div>
      </div>
      <br /><br /><br /><br/>
      <h1>Well come to Student dashboard</h1>
    </div>
  );
}

export default Student;
