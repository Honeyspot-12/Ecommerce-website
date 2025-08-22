import React, { useState } from 'react';
import './loginSignup.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


function LoginSignup() {
    const [username, setUsername]=useState()
    const [email, setEmail]=useState()
    const [password, setPassword]=useState()
    const [phone, setPhone]=useState()
    const Navigate = useNavigate();

    const handlesubmit = (e) =>{
        e.preventDefault()
        axios.post('http://localhost:3001/signup',{username,email,password,phone})
        .then(result=>console.log(result))
        Navigate('/Mens')
        .catch(err=>console.log(err))
    }

    return (
        <div className="form-container">
            
            <form id="signup-form" className="auth-form" onSubmit={handlesubmit}>
                <h2>SIGN UP</h2>

                <input
                    placeholder="Full Name"
                    type="text"
                    onChange={(e)=>setUsername(e.target.value)}
                />
                
                <input
                    placeholder="Email"
                    type="email"
                    onChange={(e)=>setEmail(e.target.value)}
                />
                

                <input
                    placeholder="Password"
                    type="password"
                    onChange={(e)=>setPassword(e.target.value)}
                />
                
                
                <input
                    type="number"
                    placeholder="Phone"
                    onChange={(e)=>setPhone(e.target.value)}

                />
            
                <button type="submit">
                    SIGN UP
                </button>
                <div className='loginhere'>
                <p >ALREADY HAVE AN ACCOUNT?<Link to='/login'><span>LOGIN HERE</span></Link></p>
                </div>
            </form>
        </div>
    );
}

export default LoginSignup;