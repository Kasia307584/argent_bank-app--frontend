import { Outlet, Link } from "react-router-dom";
import logo from "../../assets/argentBankLogo.png";
import { useState, useEffect } from "react";

export function useSignMethod(signMethod, setSignMethod) {
  useEffect(() => {
    setSignMethod(signMethod);
  }, []);
}

export default function Layout() {
  const [signMethod, setSignMethod] = useState("Sign In");

  return (
    <>
      <nav className="main-nav">
        <Link to={"/"} className="main-nav-logo">
          <img
            className="main-nav-logo-image"
            src={logo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <div>
          {signMethod === "Sign In" && (
            <Link to={"/login"} className="main-nav-item">
              <i className="fa fa-user-circle"></i>
              {signMethod}
            </Link>
          )}
          {signMethod === "Sign Out" && (
            <Link to={"/"} className="main-nav-item">
              <i className="fa fa-sign-out"></i>
              {signMethod}
            </Link>
          )}
        </div>
      </nav>

      <Outlet context={{ setSignMethod }} />
      <footer className="footer">
        <p className="footer-text">Copyright 2020 Argent Bank</p>
      </footer>
    </>
  );
}
