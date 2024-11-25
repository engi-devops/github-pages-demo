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
      <div className="auth-header">
        <h1>सेल्फ ~(को-ऑपरेटिव बैंक)</h1>
        <p>Securely login to manage your account</p>
      </div>
      <div className="auth-form">
        <form>
          <div className="form-group">
            <label htmlFor="userId">User ID</label>
            <input
              type="text"
              id="userId"
              placeholder="Enter your User ID"
              required
              onInvalid={handleInvalid}
              onInput={handleInput}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              required
              onInvalid={handleInvalid}
              onInput={handleInput}
            />
          </div>
          <button type="submit" className="btn-primary">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AuthPage;