import React from 'react';
import './admin.css';
import { Link} from 'react-router-dom';
import { ServiceList } from '../assets/assests';
import Chats from '../Chats/Chats';
import Course from '../CourseData/Course';
function Admin() {

  return (
    <div className="navhome">
      <div className="navbar-container">
        <div className="navbar" style={{ position: 'fixed', backgroundColor: '#191919' }}>
          <h1 style={{ color: 'white' }}>Admin Dashboard</h1>
          <div className="topnav"></div>
          <Link to="/" className="signin">Logout</Link>
        </div>
      </div>
      <Chats/>
      {/* <Course/> */}
      <br /><br /><br />
      <div>
         <button className="addbtn">Add</button>
      </div>
    </div>
  );
}

export default Admin;
