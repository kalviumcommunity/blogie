import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Resetpass = () => {
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { token } = useParams();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmpassword) {
      setLoading(true);
      axios
        .post(`http://localhost:3001/auth/resetpassword/${token}`, {
          password,
        })
        .then((response) => {
          setLoading(false);
          if (response.data.status) {
            alert("Your password is updated");
            navigate("/login1");
          } else {
            alert("Password reset failed. Please try again.");
          }
        })
        .catch((err) => {
          setLoading(false);
          console.log("Error:", err);
          alert("An error occurred. Please try again later.");
        });
    } else {
      alert("Please enter the same passwords in password and confirm password fields");
    }
  };

  return (
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
      {!loading && (
        <div>
          <div className="oops"><center>
            <h2>We are happy for helping you 😊</h2></center>
          </div>
          <div className="register-box new">
            <h2>Reset password</h2>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="password">Enter new password:</label>
                <input
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="confirmpassword">Confirm password:</label>
                <input
                  type="password"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <div>
                <button type="submit">Reset Password</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Resetpass;