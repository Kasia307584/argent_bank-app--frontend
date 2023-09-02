import { Outlet, Link } from "react-router-dom";
import "../../style/style.css";
import logo from "../../assets/argentBankLogo.png";
import { useState, useEffect } from "react";

export function useSignMethod(signMethod, setSignMethod) {
  useEffect(() => {
    setSignMethod(signMethod);
  }, []);
}

export default function Layout() {
  const [signMethod, setSignMethod] = useState("");

  return (
    <>
      <nav className="main-nav">
        <a className="main-nav-logo" href="./index.html">
          <img
            className="main-nav-logo-image"
            src={logo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </a>
        <div>
          {signMethod === "Sign In" && (
            <Link to={"/login"} className="main-nav-item">
              {signMethod}
            </Link>
          )}
          {signMethod === "Sign Out" && (
            <Link to={"/"} className="main-nav-item">
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
