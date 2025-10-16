import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Admin from './Admin/Admin';
import Login from './LoginPage/Login';
import Signin from './SigninPage/Signin';
import './App.css';
import Header from './HeaderPage/Header';
import Student from './StudentDashboard/Student';
import Manager from './ManagerDashboard/Manager';
import Theamtoggle from './Chats/Theamtoggle';
import Course from './CourseData/Course';
function App() {
  const [courses, setCourse] = useState([]);
  return (
     <Router>
      <Routes> 
        <Route path="/" element={<Header/>} />
        <Route path="/Admin" element={<Admin course={courses} setCourse={setCourse} />} />
        <Route path="/Signup" element={<Signin />} />
        <Route path="/loginpage" element={<Login/>} />
        <Route path='/student' element={<Student/>}/>
        <Route path='/Manager' element={<Manager/>}/>
        <Route path='/Theamtoggle' element={<Theamtoggle course={courses}/>} />
        <Route path='/chats' element={<Course/>} /> 
      </Routes>
    </Router>
  );
}

export default App;
