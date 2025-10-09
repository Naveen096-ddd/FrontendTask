import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Admin from './Admin/Admin';
import Login from './LoginPage/Login';
import Signin from './SigninPage/Signin';
import './App.css';
import Header from './HeaderPage/Header';
import Student from './StudentDashboard/Student';
import Manager from './ManagerDashboard/Manager';
function App() {
  return (
     <Router>
      <Routes>
        <Route path="/" element={<Header/>} />
        <Route path="/Admin" element={<Admin/>} />
        <Route path="/Signup" element={<Signin />} />
        <Route path="/loginpage" element={<Login/>} />
        <Route path='/student' element={<Student/>}/>
        <Route path='/Manager' element={<Manager/>}/>
      </Routes>
    </Router>
  );
}

export default App;
