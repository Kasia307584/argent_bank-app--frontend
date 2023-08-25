import { useState } from "react";

export default function SignInForm() {
  // je garde useState ici
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  // tu peux stocker ton token dans localStorage avant de passer au Redux
  // dans handleSubmit utilise deux arguments ou un objet
  function handleSubmit(userName, userPassword) {
    return fetch("http://localhost:3001/user/login", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userName, userPassword),
    })
      .then((response) => response.json())
      .then((data) => localStorage.setItem("token", data.token));
  }

  return (
    <form onSubmit={() => handleSubmit}>
      <div className="input-wrapper">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={userPassword}
          onChange={(e) => setUserPassword(e.target.value)}
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
      {/* <!-- PLACEHOLDER DUE TO STATIC SITE --> */}
      <a href="./user" className="sign-in-button">
        Sign In
      </a>
      {/* <!-- SHOULD BE THE BUTTON BELOW -->
          <!-- <button className="sign-in-button" type="submit">Sign In</button> -->
          <!--  --> */}
    </form>
  );
}
