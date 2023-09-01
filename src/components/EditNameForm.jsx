import { useState } from "react";
import { setData } from "../store/store";
import { useSelector, useDispatch } from "react-redux";

export default function EditNameForm({ setEditing }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const token = useSelector((state) => state.token.token);
  const currentFirstName = useSelector((store) => store.userData.firstName);
  const currentLastName = useSelector((store) => store.userData.lastName);

  const dispatch = useDispatch();

  async function handleFormSubmit(event) {
    event.preventDefault();
    fetch("http://localhost:3001/api/v1/user/profile", {
      method: "put",
      headers: {
        Authorization: `Bearer  ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ firstName: firstName, lastName: lastName }),
    })
      .then((response) => response.json())
      .then((data) => {
        setEditing(false);
        dispatch(setData(data.body));
      });
  }

  return (
    <form onSubmit={handleFormSubmit} className="edit-name-form">
      <input
        type="text"
        id="first-name"
        placeholder={currentFirstName}
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        type="text"
        id="last-name"
        placeholder={currentLastName}
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <button type="submit" className="edit-button">
        Save
      </button>
      <button className="edit-button"> Cancel</button>
    </form>
  );
}
