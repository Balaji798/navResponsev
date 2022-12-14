import React, { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="box">
      <div className="form">
        <h2>Sign in</h2>
        <div className="inputBox">
          <input type="text" required="required" />
          <span>Username</span>
          <i></i>
        </div>
        <div className="inputBox">
          <input type="password" required="required" />
          <span>Password</span>
          <i></i>
        </div>
        <div className="link">
          <a href="#">Forgot Password</a>
          <a href="#">Signup</a>
        </div>
        <input type="submit" value="Login"/>
      </div>
    </div>
  );
}

export default App;
