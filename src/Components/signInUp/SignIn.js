import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserLoggedIn } from "../../store/userSlice";
import { toast } from "react-toastify";


import { useState } from "react";
import "./SignInUp.css";

const SignIn = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const showToastMessage = () => {
    toast.success("Success !", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const showToastMessageError = () => {
    toast.error("Your id or password did not match !", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: add logic to submit the form
    const inputId = localStorage.getItem("id");
    const inputPassword = localStorage.getItem("password");
    if (inputId === id && inputPassword === password) {
      showToastMessage();
      dispatch(setUserLoggedIn(true));
      navigate("/");
    } else {
      showToastMessageError();
    }
    setId("");
    setPassword("");
  };

  return (
    <div className="app-container">
    <div className="form-container">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          type="email"
          value={id}
          onChange={(e) => setId(e.target.value)}
          className="input-field"
          required={true}
        />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input-field"
          required={true}
        />
        <button type="submit" className="submit-button">
          SIGN IN
        </button>
      </form>
    </div>
    </div>
  );
};

export default SignIn;
