import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./login.css"

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit=async(e)=>{
    e.preventDefault();
    setError("");
    try{
        const res = await axios.post("http://localhost:3001/login", { email, password })
        localStorage.setItem("token",res.data.token)
        localStorage.setItem("user",JSON.stringify(res.data.user))
        alert("Login Successful")
        navigate("/")

    }catch(err){
        setError(err.response?.data?.error || "Login failed")
    }
  }
  return (
    
  <div className="form-container">
    <form id="login-form"  onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>
         <input
        placeholder="Email"
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
      />
      <input
        placeholder="Password"
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        required
      />
      <button type="submit">Login</button>
      {error && <p style={{color: "red"}}>{error}</p>}
    </form>
  </div>
  )
}

export default Login;