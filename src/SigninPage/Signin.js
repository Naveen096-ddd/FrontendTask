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
    const[error,setError] = useState('');
    const [validationErrors, setValidationErrors] = useState({});
    const navigate = useNavigate();
    const handleSubmit= async(e)=>{
        e.preventDefault();
        setError('');
        const errors = validate();
        setValidationErrors(errors);
        if (Object.keys(errors).length > 0) {
        return;
        }

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
      const validate = () => {
            const errors = {};
            if (fname.trim().length < 2) errors.fname = "First name must be at least 2 characters.";
            if (lname.trim().length < 2) errors.lname = "Last name must be at least 2 characters.";
            if (!username.trim()) errors.username = "Username is required.";
            if (!/^\S+@\S+\.\S+$/.test(email)) errors.email = "Invalid email address.";
            if (!role) errors.role = "Please select a role.";
            if (! /^(?=.*[!@#$%^&*()_\-+={}[\]|\\:;"'<>,.?/~`]).+$/.test(password)) errors.password = "Password must be strong";
            return errors;
        };
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
                     {validationErrors.fname && <p className="error">{validationErrors.fname}</p>}
                </label>
                <br />
                <label>
                    Last Name:
                    <input type="text" name="lastName"
                    value={lname}
                    onChange={(e)=>setlname(e.target.value)}
                    required />
                     {validationErrors.lname && <p className="error">{validationErrors.lname}</p>}
                </label>
                <br />
                <label>
                    Username:
                    <input type="text" name="username"
                    value={username}
                    onChange={(e)=>setusername(e.target.value)}
                    required />
                    {validationErrors.username && <p className="error">{validationErrors.username}</p>}
                </label>
                <br />
                <label>
                    Email:
                    <input type="email" name="email"
                    value={email}
                    onChange={(e)=>setemail(e.target.value)}
                    required />
                    {validationErrors.email && <p className="error">{validationErrors.email}</p>}
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
                {validationErrors.role && <p className="error">{validationErrors.role}</p>}
                <br />
                <label>
                    Password:
                    <input type="password" name="password"
                    value={password}
                    onChange={(e)=>setpassword(e.target.value)}
                    required />
                    {validationErrors.password && <p className="error">{validationErrors.password}</p>}
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
