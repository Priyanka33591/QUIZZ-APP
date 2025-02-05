import React from 'react';
import './Login.css';

function Login() {
  return (
    <div className="login-container">
      <div className="login-form">
        <h1 className="logo">  
          <span className="quiz">Quiz</span><span className="tbpp">TBPP</span>
        </h1>
        <h2>Welcome back!</h2>
        <p>Please login/Signup to your account.</p>

        <form>
          <label>Email Address</label>
          <input type="email" placeholder="Enter your email" required />
          
          <label>Password</label>
          <input type="password" placeholder="Enter your password" required />

          <div className="form-options">
            <label>
              <input type="checkbox" /> Remember Me
            </label>
            <a href="#" className="forgot-password">Forgot Password?</a>
          </div>

          <div className="buttons">
            <button className="login-btn">Login</button>
            <button className="signup-btn">Signup</button>
          </div>
        </form>

        <p className="social-login-text">Or login with</p>
        <div className="social-buttons">
          <button className="facebook-btn">Facebook</button>
          <button className="google-btn">Google</button>
        </div>
      </div>

      <div className="login-image">
        <img
          src="https://pearlyarts.com/wp-content/uploads/2023/05/FREE-Graduation-Cap-Clipart-WM.png"
          alt="Graduation Cap"
        />
      </div>
    </div>
  );
}

export default Login;
