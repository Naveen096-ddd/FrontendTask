import React,{useState} from 'react';
import './admin.css';
import { Link} from 'react-router-dom';
import { ServiceList } from '../assets/assests';
import Chats from '../Chats/Chats';
import Course from '../CourseData/Course';
import Theamtoggle from '../Chats/Theamtoggle';
function Admin({course, setCourse}) {
  const [showForm , setShowForm] = useState(false);
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [duration, setDuration] = useState('');
  const [fee, setFee] = useState('');
  // const [course, setCourse] = useState([]);
  const handleAddClick = () =>{
    setShowForm(true);
  }
  const handleClick = (e) =>{
    e.preventDefault();
    const courseList = { title, category, duration, fee };
    console.log(courseList);
    setCourse([...course, courseList]);
    setTitle('');
    setCategory('');
    setDuration('');
    setFee('');
    setShowForm(false);
  }
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
         <button className="addbtn" onClick={handleAddClick}>Add</button>
         {showForm && (
          <div className="form-container">
            <h2>Add New Service</h2>  
            <form>
             <div className="course-add">
                <input type="text"  placeholder=" CourseName" value={title} onChange={(e) => setTitle(e.target.value)}/>
                <input type="text"  placeholder=" Category" value={category} onChange={(e) => setCategory(e.target.value)}/>
                <input type="text"  placeholder=" Duration" value={duration} onChange={(e) => setDuration(e.target.value)} />
                <input type="text"  placeholder=" Fee" value={fee} onChange={(e) => setFee(e.target.value)} />
                <button onClick={handleClick} className="search">Add Course</button>
              </div>
            </form>
          </div>
         )}
      </div>
      <div className="course-list">
          {course.map((item, index) => (
            <div className="course-items" key={index}>
              <span>{index + 1}</span>
              <span>{item.title}</span>
              <span>{item.category}</span>
              <span>{item.duration}hr</span>
              <span>${item.fee}</span>
            </div>
          ))}
      </div>
      {/* <Theamtoggle course={course}/> */}
    </div>
  );
}

export default Admin;
