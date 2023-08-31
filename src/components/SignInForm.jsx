import { useState } from "react";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function SignInForm() {
  // je garde useState ici
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const navigate = useNavigate();

  // const [datas, setDatas] = useState();
  // const dispatch = useDispatch()

  async function handleFormSubmit(event) {
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
        console.log(data);
        localStorage.setItem("token", data.body.token);
        navigate("/profile");
        // setDatas(data);
        // dispatch(setToken())
      });
  }

  // useEffect(() => {
  //   console.log(datas);
  // }, [datas]);

  return (
    <form onSubmit={handleFormSubmit}>
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
      {/* <Link to={`/profile`}> */}
      <button className="sign-in-button" type="submit">
        Sign In
      </button>
      {/* </Link> */}
    </form>
  );
}
