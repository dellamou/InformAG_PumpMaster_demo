// src/pages/LoginPage.tsx
import '../styles/Login.css';

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Welcome back</h2>
        <form className="login-form">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter your username" />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter your password" />

          <button type="submit">Login</button>
          <p className="register-text">
            Don&apos;t have an account? <a href="#" className="register-link">Register</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
