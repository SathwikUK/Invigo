import React from "react";
import "./Login.css";

const Login = ({ onClose }) => {
  const handleClose = () => {
    onClose(); // Call the onClose function passed from the parent component
  };

  return (
    <div className="overlay">
      <div className="login-container">
        <p className="title">Login</p>
        <form className="form">
          {/* Login form inputs */}
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="username" placeholder="" />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" placeholder="" />
            <div className="forgot">
              <a rel="noopener noreferrer" href="#">
                Forgot Password ?
              </a>
            </div>
          </div>
          <button className="sign">Sign in</button>
        </form>
        <div className="social-message">
          <div className="line"></div>
          <p className="message">Login with social accounts</p>
          <div className="line"></div>
        </div>
        <div className="social-icons">
          {/* Social login buttons */}
        </div>
        <p className="signup">
          Don't have an account?
          <a rel="noopener noreferrer" href="#" className="">
            Sign up
          </a>
        </p>
        {/* Cancel button to close the login overlay */}
        <button className="cancel" onClick={handleClose}>Cancel</button>
      </div>
    </div>
  );
};

export default Login;
