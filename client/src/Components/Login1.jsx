import logo2 from "../assets/logo2.png";
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


axios.defaults.withCredentials = true;

const Login1 = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true)
    axios.post("http://localhost:3001/auth/login", {
      email,
      password,
    })
    .then(response => {
      console.log(response);
      if (response.data.status) {
        setTimeout(() => {
          navigate('/home');
        }, 2000)
      } else {
        alert(response.data.message || "Login failed");
      }
    })
    .catch(err => {
      console.log(err);
      alert("An error occurred. Please try again later.");
    }).finally(() => {
      setTimeout(() => {
        setLoading(false)
      }, 1000);
    })
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
          <h2 className="welcome">Welcome back to</h2>
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
            <div>
              {!loading ? (<center>
                <button type="submit">Login</button>
              </center>) : null}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login1;
