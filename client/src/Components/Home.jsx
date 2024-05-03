import { useState, useEffect } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import logo2 from '../assets/logo2.png'
import "./sample.css"

const Home = () => {
  const [blogs, setBlogs] = useState([])
  const [currentDate, setCurrentDate] = useState("");
  const [currentTime, setCurrentTime] = useState("")

  // Date function
  useEffect(() => {
    const getCurrentDate = () => {
      const date = new Date();
      const formattedDate = date.toLocaleDateString();
      setCurrentDate(formattedDate);
    };
    getCurrentDate();
    const interval = setInterval(getCurrentDate, 1000);
    return () => clearInterval(interval);
  }, []);
   // Time function
  useEffect(() => {
    const getCurrentTime = () => {
      const date = new Date();
      const formattedTime = date.toLocaleTimeString();
      setCurrentTime(formattedTime);
    };
    getCurrentTime(); 
    const interval = setInterval(getCurrentTime, 1000); 
    return () => clearInterval(interval);
  }, [])
  useEffect(() => {
    axios
    .get("http://localhost:3001/getdata")
    .then((response) => {
      console.log(response.data)
      setBlogs(response.data)
    })
    .catch((err) => console.log(err))
  }, [])

  return (
    <div className='main'>
      <nav>
        <div className="div1">
          <div className='mainlogodiv'>
            <div>
            <img src={logo} alt="Logo" className="logo-home" />
            </div>
            <div className='dates'>
              <p className='date'>Date: {currentDate}</p>
              <p className='time'>Time: {currentTime}</p>
            </div>
          </div>
          <div className="div2">
            <Link to="/" className="link">
              <h3>Home</h3>
            </Link>
            <Link to="/blog" className="link">
              <h3>Create a Blog</h3>
            </Link>
            <Link to="/about" className="link">
              <h3>About</h3>
            </Link>
          </div>
        </div>
      </nav>
      <div className="big-font">
        <center>
          <h1>Read or Create Your</h1>
          <h1>ideas💡 here !</h1>
        </center>
      </div>
      <center>
        {blogs.length === 0 ? (
          <div className="no-blogs">
            <center>
              <h2 className="first-author">Be the first author of</h2>
              <img src={logo2} alt="" className="logo2" />
            </center>
            <Link to="/blog" className="link">
              <button className="btn-12">
                <span>Create a Blog</span>
              </button>
            </Link>
          </div>
        ) : (
          blogs.map((blog) => (
            <div className="blog" key={blog._id}>
              <div className='.blog-heading'>
                <center>
                  <h2>{blog.heading}</h2>
                </center>
              </div>
              <div className="text">
                <center>
                  <p>{blog.blog}</p>
                </center>
              </div>
              <div className="contacts">
                <p>
                  <strong>Created by {blog.author}</strong>
                </p>
                <br />
                <p>
                  Contact {blog.author} at {blog.email}
                </p>
              </div>
            </div>
          ))
        )}
      </center>
    </div>
  );
};

export default Home;