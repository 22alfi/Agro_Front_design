import React, { useState } from 'react';
import './SignUp.css';
import googleLogo from './google_logo-removebg-preview.png';
import rightImage from './right.jpg'; // Import the right-side image

const SignUp = () => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState(''); // Added state for password

  const handleForgotPassword = () => {
    console.log('Forgot Password clicked');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', { fullName, phoneNumber, password });
  };

  return (
    <div className="signup-container">
      <div className="form-container">
        <p>Create Account !!</p>
        <form onSubmit={handleSubmit}>
          <div className="input-item">
            <label>Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <div className="input-item">
              <label>Email</label>
              <input type="email" placeholder="Enter your email" required />
            </div>
            <div className="input-item">
              <label>Phone Number</label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
            </div>
          </div>

         
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div className="remember-forgot">
            <div>
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember me</label>
            </div>
            <button type="button" className="link-button" onClick={handleForgotPassword}>
              Forgot your password?
            </button>
          </div>

          <button type="submit" className="login-btn">Sign Up</button>
        </form>

        <p className="small-text">OR</p>

        <button className="google-login">
          <img src={googleLogo} alt="Google Logo" className="google-logo" />
          Sign up with Google
        </button>
      </div>

      {/* Right-side image */}
      <img src={rightImage} alt="Right Side" className="right-image" />
    </div>
  );
};

export default SignUp;
