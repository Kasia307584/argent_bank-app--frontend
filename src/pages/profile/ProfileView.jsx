import "../../style/style.css";
import { useState, useEffect } from "react";
import { setData } from "../../store/store";
import { useSelector, useDispatch } from "react-redux";
import EditNameForm from "../../components/EditNameForm";

export default function ProfileView() {
  const token = useSelector((state) => state.token.token);
  const name = useSelector((state) => state.userData.firstName);
  const dispatch = useDispatch();

  async function fetchData() {
    return fetch("http://localhost:3001/api/v1/user/profile", {
      method: "post",
      headers: {
        Authorization: `Bearer  ${token}`,
        "Content-Type": "application/json",
      },
    }).then((response) => response.json());
  }

  useEffect(() => {
    fetchData().then((data) => {
      dispatch(setData(data.body));
    });
  }, []);

  const [editing, setEditing] = useState(false);

  return (
    <>
      <main className="main bg-dark">
        <div className="header">
          <h1>
            Welcome back
            <br />
            {editing ? <EditNameForm /> : name}
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
