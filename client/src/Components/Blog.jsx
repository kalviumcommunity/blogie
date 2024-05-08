import { useState } from "react";
import axios from "axios";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
const Blog = () => {
  const [author, setAuthor] = useState("");
  const [email, setEmail] = useState("");
  const [heading, setHeading] = useState("");
  const [image, setImage] = useState("");
  const [blog, setBlog] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/data", {
        author,
        email,
        heading,
        blog,
        image
      })
      .then((response) => {
        console.log(response.data);
        if (response.data.status) {
          console.log("data stored");
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="main">
      <div>
        <nav>
          <div className="div1">
            <img src={logo} alt="Logo" className="logo-blog" />
            <div className="div22">
              <Link to="/" className="link">
                <h3>Home</h3>
              </Link>
              <Link to="/about" className="link">
                <h3>About</h3>
              </Link>
            </div>
          </div>
        </nav>
      </div>
      <center>
        <div className="input-content">
          <form action="" onSubmit={handleSubmit}>
            <div className="">
              <label htmlFor="text">Author name : </label>
              <input
                type="text"
                placeholder="Enter your name"
                onChange={(e) => setAuthor(e.target.value)}
              />
              <br />
            </div>
            <div className="input">
              <label htmlFor="email">Email : </label>
              <input
                type="email"
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input">
              <label htmlFor="text">About : </label>
              <input
                type="text"
                placeholder="Enter the Blog heading"
                onChange={(e) => setHeading(e.target.value)}
              />
            </div>

            <div className="input">
              <label htmlFor="text">Image link : </label>
              <input
                type="text"
                placeholder="Enter your image link here"
                onChange={(e) => setImage(e.target.value)}
              />
            </div>

            <div className="input">
              <p>Write your Blog : </p>
              <br />
              <textarea
                name="blog"
                id=""
                cols="55"
                rows="25"
                onChange={(e) => setBlog(e.target.value)}
              ></textarea>
            </div>
            <button className="menu__button">
              <span>Hover me!</span>
            </button>
          </form>
        </div>
      </center>
    </div>
  );
};

export default Blog;
