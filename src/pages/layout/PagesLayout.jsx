import { Outlet } from "react-router-dom";
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
          <a className="main-nav-item" href="./sign-in.html">
            <i className="fa fa-user-circle"></i>
            {signMethod}
          </a>
        </div>
      </nav>

      <Outlet context={{ setSignMethod }} />
      <footer className="footer">
        <p className="footer-text">Copyright 2020 Argent Bank</p>
      </footer>
    </>
  );
}
