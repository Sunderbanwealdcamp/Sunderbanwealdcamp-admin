'use client'
import React, { useState } from 'react';
import axios from "axios";
import Link from 'next/link';

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
      e.preventDefault();
      setUsernameError("");
      setPasswordError("");
      setError("");
  
      if (!username) {
        setUsernameError("Please enter your username.");
        return;
      }
  
      if (!password) {
        setPasswordError("Please enter your password.");
        return;
      }
  
      try {
        const response = await axios.post("/api/login", { username, password });
        // Handle the response and redirection to the desired page upon successful login
        console.log("Login successful!", response.data);
      } catch (error) {
        setError("Invalid credentials. Please try again.");
      }
    };
  return (
    <div className='login'>
      <h3>Sign in</h3>
      {error && <p className='error'>{error}</p>}
      <form onSubmit={handleLogin}>
        <div className='fRow'>
          <input
            placeholder='Username'
            type="text"
            className={`tBox ${!usernameError ? 'error' : ''}`}
            value={username}
            onChange={(e) => setUsername(e.target.value)}

          />
          {/* {usernameError && <span className='error'>{usernameError}</span>} */}
        </div>
        <div className='fRow'>
          <input
            placeholder='Password'
            type="password"
            className={`tBox ${!passwordError ? 'error' : ''}`}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* {passwordError && <span className='error'>{passwordError}</span>} */}
        </div>
        <p className='aRight'> <Link className='link' href="/forget-password">Forget Password</Link></p>
        <div className="aCenter"><button className='butn-dark' type="submit"><span>Login</span></button></div>
      </form>
      <p className='aCenter'>Don't have an account? <Link className='link' href="/sign-up">Sign up</Link></p>
    </div>
  )
}


export default SignIn