import React, { useState } from 'react'
import "./Signup.css"

const Signup = () => {
const [formData,setFormData] = useState({
     name:" ",
     email:" ",
     password:" ",
     confirmPassword:" ",
});

 const handleChange=(e) =>{
    setFormData({...formData,[e.target.name]: e.target.value});
 }
    const handleSubmit =(e)=>{
        e.preventDefault();
        if(formData.password=== formData.confirmPassword){
            console.log("submitted",formData);
            alert("Signup successfully");
            
        }else{
            alert("Password not match");
        }
    }
  return (
    <div className="signup-container">
    <h1 className="text-3xl font-bold mb-4 color:green" style={{color:""}}>Sign Up</h1>
    <form onSubmit={handleSubmit} className="signup-form">
      <div className="form-group">
        <label style={{color:"black"}}>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label style={{color:"black"}}>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label style={{color:"black"}}>Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label style={{color:"black"
        }}>Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className="btn-signup">
        Sign Up
      </button>
    </form>
  </div>
  )
}

export default Signup
