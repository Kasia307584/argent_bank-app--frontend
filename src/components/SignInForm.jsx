import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setToken } from "../store/store";
import { useDispatch } from "react-redux";

export default function SignInForm() {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleFormSubmit(event) {
    event.preventDefault();
    fetch("http://localhost:3001/api/v1/user/login", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: userName, password: userPassword }),
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch(setToken(data.body.token));
        if (data.body.token) {
          navigate("/profile");
        }
      });
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="input-wrapper">
        <label htmlFor="username">Username</label>
        <input
          type="email"
          id="username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          required
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={userPassword}
          onChange={(e) => setUserPassword(e.target.value)}
          required
        />
      </div>
      <div className="input-remember">
        <input
          type="checkbox"
          id="remember-me"
          value={rememberMe}
          onChange={(e) => setRememberMe(e.target.checked)}
        />
        <label htmlFor="remember-me">Remember me</label>
      </div>
      <button className="sign-in-button" type="submit">
        Sign In
      </button>
    </form>
  );
}
