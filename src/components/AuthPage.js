import React from "react";
import "./AuthPage.css";

const AuthPage = () => {
  const handleInvalid = (event) => {
    event.target.setCustomValidity("This field is required.");
  };

  const handleInput = (event) => {
    event.target.setCustomValidity("");
  };

  return (
    <div className="auth-container">
      {/* Header Section */}
      <div className="auth-header">
        <h1>सेल्फ~(को-ऑपरेटिव बैंक)</h1>
        <p><strong>Securely login to manage your account</strong></p>
      </div>

      {/* Login Form */}
      <div className="auth-form">
        <form>
          {/* User ID Input */}
          <div className="form-group">
            <label htmlFor="userId" className="form-label">
              <i className="fas fa-user-circle"></i> User ID
            </label>
            <input
              type="text"
              id="userId"
              className="form-input"
              placeholder="Enter your User ID"
              required
              onInvalid={handleInvalid}
              onInput={handleInput}
            />
          </div>

          {/* Password Input */}
          <div className="form-group">
            <label htmlFor="password" className="form-label">
              <i className="fas fa-lock"></i> Password
            </label>
            <input
              type="password"
              id="password"
              className="form-input"
              placeholder="Enter your password"
              required
              onInvalid={handleInvalid}
              onInput={handleInput}
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn-primary">
            <i className="fas fa-sign-in-alt"></i> Login
          </button>
        </form>
      </div>

      {/* Footer */}
      <div className="auth-footer">
        <p>©2024 सेल्फ~(को-ऑपरेटिव बैंक). All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default AuthPage;