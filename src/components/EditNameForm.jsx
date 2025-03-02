import { useState } from "react";
import { setData } from "../store/store";
import { useSelector, useDispatch } from "react-redux";

export default function EditNameForm({ setEditing }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const token = useSelector((state) => state.token.token);
  const userName = useSelector((store) => store.userData);
  const dispatch = useDispatch();

  function handleFormSubmit(event) {
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
      <div>
        <input
          type="text"
          id="first-name"
          className="edit-input--form"
          placeholder={userName.firstName}
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          id="last-name"
          className="edit-input--form"
          placeholder={userName.lastName}
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div>
        <button type="submit" className="edit-button edit-button--form">
          Save
        </button>
        <button
          className="edit-button edit-button--form"
          onClick={() => setEditing(false)}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
