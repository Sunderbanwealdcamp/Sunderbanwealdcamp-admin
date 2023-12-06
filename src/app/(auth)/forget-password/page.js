'use client'
import React, { useState } from 'react';

function ForgetPassword() {
  const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
      e.preventDefault();
      // Implement API call to send a password reset email using the email address.
      // You can use libraries like axios or fetch to make the API call.
      // Replace 'your-forgot-password-api-endpoint' with the actual API endpoint.
      try {
        const response = await fetch('your-forgot-password-api-endpoint', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        });
        // Handle the response (e.g., show success message, error message, etc.).
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };
  return (
    <div className='forgetPass'>
      <h3>Recover My Password</h3>
      <form onSubmit={handleSubmit}>
        <div className='fRow'>
          <input
            type="email"
            placeholder='Email'
            className='tBox'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="aCenter"><button className='butn-dark' type="submit"><span>Submit</span></button></div>
      </form>
      <p className='aCenter'>Back to <a className='link' href="/">Sign in</a></p>
    </div>
  )
}

export default ForgetPassword