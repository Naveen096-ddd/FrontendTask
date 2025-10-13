import React,{useState} from "react";
import './login.css';
import { useLocation } from "react-router-dom";
import {mockLogin} from '../MockAPIs/MockApis';
import { useNavigate } from 'react-router-dom';
function Loginpage(){
    const[inputUsername,setInputUsername]=useState("");
    const[inputPassword,setInputPassword]=useState("");
    const[role,setrole]=useState('');
    const[error,setError] = useState('');
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await mockLogin(inputUsername, inputPassword,role);
      console.log(response);
      alert(`✅ Login successful as ${response.role}`);
      if (response.role === 'admin') {
        navigate('/admin');
        } else if (response.role === 'Manager') {
        navigate('/Manager');
        } else {
        navigate('/student');
        }
    } catch (err) {
      setError("❌ Invalid username or password");
    }
  };

    return(
        <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <h1>Login Page</h1>
                <label>
                    Username:
                    <input type="text" name="username"
                    value={inputUsername}
                    onChange={(e)=>setInputUsername(e.target.value)}
                     required />
                </label>
                <br />
                <label>
                    Password:
                    <input type="password" name="password"
                    value={inputPassword}
                    onChange={(e)=>setInputPassword(e.target.value)}
                     required />
                </label>
                <br />
               
                <button type="submit" className="login">Login</button>
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </form>
        </div>
    )
}
export default Loginpage;
