import "../../style/style.css";
import { useState, useEffect } from "react";

export default function ProfileView() {
  // const [userData, setUserData] = useState();

  async function fetchData() {
    fetch("http://localhost:3001/api/v1/user/profile", {
      method: "post",
      headers: {
        Authorization: `Bearer  ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token: localStorage.getItem("token") }),
    }).then((response) => response.json());
  }

  // faut faire un post et pas get pour retourner user profil (firstName et lastName) => a la fin c'est ds le redux
  useEffect(() => {
    fetchData().then((data) => console.log(data));
  }, []);

  // ici on garde useState
  const [editing, setEditing] = useState(false);

  // ajouter put

  return (
    <>
      <main className="main bg-dark">
        <div className="header">
          <h1>
            Welcome back
            <br />
            {editing ? "<FormPourChangerNom/>" : "Tony Jarvis!"}
          </h1>
          <button className="edit-button" onClick={() => setEditing(true)}>
            Edit Name
          </button>
        </div>
        <h2 className="sr-only">Accounts</h2>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Checking (x8349)</h3>
            <p className="account-amount">$2,082.79</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Savings (x6712)</h3>
            <p className="account-amount">$10,928.42</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
            <p className="account-amount">$184.30</p>
            <p className="account-amount-description">Current Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
      </main>
    </>
  );
}
