import './login.css'

const Login = () => {
  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-brand">
          <div className="login-logo">MT</div>
          <h1>Money Tracker</h1>
        </div>
        <p>Welcome back! Please enter your credentials to access your account.</p>
        <form className="login-form">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email" />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter your password" />
          <button type="submit">Log in</button>
        </form>
        <div className="login-footer">
          <a href="forgot-password.html">Forgot your password?</a>
          <a href="signup.html">Don't have an account? Sign up</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
