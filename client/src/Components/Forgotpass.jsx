import gmail from "../assets/gmail.svg";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Forgotpass = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleEmail = () => {
    window.open("https://mail.google.com/mail/u/0/#spam", "_blank");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post("http://localhost:3001/auth/forgotpassword", { email });
      if (response.data.status) {
        alert("Check your email by clicking the email logo, please check spam emails for to reset password");
        setTimeout(() => {
          navigate("/login1");
        }, 2000)
      } else {
        alert("your email is not registered")
      }
    } catch (error) {
      console.error("Error occurred while submitting form:", error);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000)
    }
  };

  return (
    <div>
      <div>
      {isLoading && (
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
        <center>
          <div className="oops">
            <h2 className="welcome">Oops!</h2>
            <h2 className="welcome1">Dont worry!</h2>
            <h3 className="welcome2">We are here to get back your password</h3>
          </div>
        </center>
        <div className="register-box new">
          <center>
            <h2>Forgot password</h2>
          </center>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email">Enter your email : </label>
              <input type="email" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="spsbtns">
              <div className="sendbtn">
                <button className="btn7" type="submit" disabled={isLoading}>
                  {isLoading ? 'Sending...' : 'Send'}
                  <div className="svg-wrapper-1">
                    <div className="svg-wrapper">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                      >
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path
                          fill="currentColor"
                          d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </button>
              </div>
              <img
                src={gmail}
                alt=""
                className="gmaillogo"
                onClick={handleEmail}
              />
            </div>
          </form>
          <center>
            <div className="suggestion">
              <p>Open gmail and check for blogie's mail</p>
            </div>
          </center>
        </div>
      </div>
    </div>
  );
};

export default Forgotpass;
