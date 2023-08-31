import "../../style/style.css";
import { useState, useEffect } from "react";

export default function ProfileView() {
  async function fetchData() {
    return fetch("http://localhost:3001/api/v1/user/profile", {
      method: "post",
      headers: {
        Authorization: `Bearer  ${localStorage.getItem("token")}`,
        // store.getState()
        // ou {token} depuis const token = useSelector(state => state.token)
        "Content-Type": "application/json",
      },
    }).then((response) => response.json());
  }

  // const dispatch = useDispatch()
  // const name = useSelector(state => state.firstName)

  useEffect(() => {
    fetchData().then((data) => {
      console.log(data);
      // dispatch(setData(data))
    });
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
            {/* {name} */}
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
