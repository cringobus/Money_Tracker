import { useState } from 'react'
import axios from 'axios';
import Header from '../Header/Header'
import '../../App.css'
import './login.css'

const Login = () => {
  const [isRegister, setIsRegister] = useState(false)
  const [emailInput, setEmailInput] = useState('')
  const [passwordInput, setPasswordInput] = useState('')

  const [registerResp, setRegisterResp] = useState(null)
  const [loginResp, setLoginResp] = useState(null)

  const emailText = (e) => {
    setEmailInput(e.target.value)
    console.log(emailInput)
  }

  const passwordText = (e) => {
    setPasswordInput(e.target.value)
    console.log(passwordInput)
  }

  const regRequest = async() => {
    const response = await axios.post("http://localhost:3000/api/v1/access/register", {
      username: "BcryptTesting2111",
      password: "12345",
      email:"TestinBcrypt211@gmail.com"
    })
    setRegisterResp(response.data)
  }

  const logRequest = async() => {
    const response = await axios.post("http://localhost:3000/api/v1/access/login", {
      username: "BcryptTesting2111",
      password: "12345",
      usernamemail:"TestinBcrypt211@gmail.com"
    })
    setLoginResp(response.data)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <Header />
      <div className="login-page">
        <div className="main-box login-box">
          <h3>{isRegister ? 'Register' : 'Login'}</h3>
          <hr />
          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="form-field">
              <p>Email</p>
              <input 
              type="email" 
              name="email" 
              value = {emailInput}
              onChange={(e) => emailText(e)}
              required />
            </div>
            <div className="form-field">
              <p>Password</p>
              <input 
              type="password" 
              name="password" 
              value = {passwordInput}
              onChange={(e) => passwordText(e)}
              required />
            </div>
            {isRegister &&
            <button
            type="submit"
            onClick={() => regRequest()}
            >Register</button>}
            {!isRegister &&
            <button
            type="submit"
            onClick={() => logRequest()}
            >Login</button>
            }
            
            {registerResp && <p>registerResp.message</p>}
            {loginResp && <div><p>{loginResp.message}</p><p>{loginResp.token}</p></div>}
            
          </form>
          <p className="auth-toggle">
            {isRegister ? 'Already have an account?' : "Don't have an account?"}{' '}
            <button
              type="button"
              className="link-btn"
              onClick={() => setIsRegister(!isRegister)}
            >
              {isRegister ? 'Login' : 'Register'}
            </button>
          </p>
        </div>
      </div>
    </>
  )
}

export default Login
