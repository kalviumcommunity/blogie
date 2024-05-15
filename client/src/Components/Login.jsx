import logo2 from "../assets/logo2.png";
import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";

axios.defaults.withCredentials = true;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await axios.post("http://localhost:3001/auth/login", {
        email,
        password,
      });
      console.log(response);
      navigate("/")
    } catch (error) {
      console.error("An error occurred during login:", error);
      alert("An error occurred. Please try again later.");
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  };
  
  

  return (
    <div>
      <div className="main-page1">
        <div>
        {loading && (
            <div className="loader-container">
              <div className="spinner">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          )}
          <h2 className="welcome">Welcome to</h2>
          <img src={logo2} alt="" className="logo3" />
        </div>
        <div className="register-box">
          <center><h2>Login here!</h2></center>
          <form action="" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="label">Email : </label>
              <input type="email" onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div>
              <label htmlFor="password" className="label">Password : </label>
              <input type="password" onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <p>Enjoy our space by clicking login</p>
            <Link to="/forgotpass"><br />
            <p>Forgot password?</p></Link>
            <div>
              {!loading ? (<center>
                <button type="submit" className="login-btn">Login</button>
              </center>) : null}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Login;