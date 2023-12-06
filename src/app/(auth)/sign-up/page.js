'use client'
import React, { useState } from 'react';
import Link from 'next/link';

function SignUp() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ firstName, lastName, email, password, confirmPassword }),
      });

      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      setMessage('An error occurred. Please try again later.');
    }
  };
  return (
    <div className='register'>
          <h3>Sign Up</h3>
          <form onSubmit={handleSubmit}>
            <div className='fRow'>
              <input
                type="text"
                placeholder='First Name'
                className='tBox'
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className='fRow'>
              <input
                type="text"
                placeholder='Last Name'
                className='tBox'
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className='fRow'>
              <input
                type="email"
                placeholder='Email'
                className='tBox'
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className='fRow'>
              <input
                type="password"
                placeholder='Password'
                className='tBox'
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className='fRow'>
              <input
                type="password"
                placeholder='Confirm Password'
                className='tBox'
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <div className="aCenter">
              <button className='butn-dark' type="submit"><span>Sign Up</span></button>
            </div>
          </form>
          {message && <p>{message}</p>}
          <p className='aCenter'>Already have an account? <Link className='link' href="/">Sign in</Link></p>
    </div>

  )
}

export default SignUp