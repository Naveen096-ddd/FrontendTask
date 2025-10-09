import React,{use, useState} from 'react';
import './sign.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { mockLogin } from '../MockAPIs/MockApis';
function SignupPage() {
    const[fname,setfname]=useState("");
    const[lname,setlname]=useState("");
    const[username,setusername]=useState("");
    const[email,setemail]=useState("");
    const[role,setrole] = useState("");
    const[password,setpassword]=useState("");
    const[error,setError] = useState('')
    const navigate = useNavigate();
    const handleSubmit= async(e)=>{
        e.preventDefault();
        setError('')
        const userData =({fname,lname,username,email,role,password});
        console.log(userData)
        alert("Signup successful");
        try {
              const response = await mockLogin(username, password,role);
              console.log(response);
              alert(`✅ Welcome  to ${response.role}`);
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
    }
  return (
    <div className="signup-container1" >
        <div className="signup-container">
            <h1>Signup Page</h1>
            <form className='signup-form' onSubmit={handleSubmit}>
                <label> 
                    First Name:
                    <input type="text" name="firstName" 
                    value={fname}
                    onChange={(e)=>setfname(e.target.value)}
                    required />
                    
                </label>
                <br />
                <label>
                    Last Name:
                    <input type="text" name="lastName"
                    value={lname}
                    onChange={(e)=>setlname(e.target.value)}
                    required />
                </label>
                <br />
                <label>
                    Username:
                    <input type="text" name="username"
                    value={username}
                    onChange={(e)=>setusername(e.target.value)}
                    required />
                </label>
                <br />
                <label>
                    Email:
                    <input type="email" name="email"
                    value={email}
                    onChange={(e)=>setemail(e.target.value)}
                    required />
                </label>
                <br />
                <select className='role'
                    onChange={e => setrole(e.target.value)} 
                    value={role}
                    required
                    >
                    <option value="" disabled>Select Role</option>
                    <option value="student">Student</option>
                    <option value="Manager">Manager</option>
                    <option value="admin">Admin</option>
                </select>

                <br />
                <label>
                    Password:
                    <input type="password" name="password"
                    value={password}
                    onChange={(e)=>setpassword(e.target.value)}
                    required />
                </label>
                <br />
                
                <div className='brn'style={{display:'flex'}}>
                    <button className="sig1">signin</button>
                   {error && <p style={{ color: 'red' }}>{error}</p>}
                    <Link to="/loginpage" className="sig">Already have account please login here / login</Link>
                </div>
                {/* <Link to="/loginpage" className="signup">Signup</Link> */}
            </form>
        </div>
    </div>
  );
}

export default SignupPage;
