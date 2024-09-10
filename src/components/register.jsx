
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import './register.css';  // Ensure this file contains the necessary styles

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDiqzKWIPYPLCJ_LWmx4vovUk5_vzm-lc0",
  authDomain: "my-first-project-9cd31.firebaseapp.com",
  projectId: "my-first-project-9cd31",
  storageBucket: "my-first-project-9cd31.appspot.com",
  messagingSenderId: "36408870032",
  appId: "1:36408870032:web:6a5ccff1d14776cbd58415",
  measurementId: "G-F2BD5NY6D2",
};

function Register() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
  }, []);

  const handleAuth = async (e) => {
    e.preventDefault();
    const auth = getAuth();
    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
        setMessage("Login successful!");
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
        setMessage("Registration successful!");
      }
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    }
  };

  return (
    <div className="register-container">
      <div className="auth-form">
        <h1 className="text-center">{isLogin ? "Login" : "Sign Up"}</h1>
        <form onSubmit={handleAuth}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="submit-btn">
            {isLogin ? "Login" : "Register"}
          </button>
        </form>
        <p className="text-center">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <button onClick={() => setIsLogin(!isLogin)} className="toggle-link">
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </p>
        {message && <p className="message">{message}</p>}
        <Link to="/" className="back-link">Back to Home</Link>
      </div>
    </div>
  );
}

export default Register;
