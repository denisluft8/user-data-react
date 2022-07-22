import "./addData.css";
import React, { useState } from "react";

function AddData({ saveData }) {
  const [addFormData, setAddFormData] = useState({
    name: "",
    email: "",
    occupation: "",
    birthday: "",
  });
  const handleFormSubmit = (event) => {
    //chamada quando aperta o botão
    event.preventDefault();
    saveData(addFormData);
    event.target.reset();
  };
  return (
    <div className="add-data">
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          className="add-data-inputs"
          placeholder="name"
          name="name"
          required="required"
          onChange={(e) =>
            setAddFormData({ ...addFormData, name: e.target.value })
          }
        />
        <input
          type="email"
          className="add-data-inputs"
          placeholder="email"
          name="email"
          required="required"
          onChange={(e) =>
            setAddFormData({ ...addFormData, email: e.target.value })
          }
        />
        <input
          type="text"
          className="add-data-inputs"
          placeholder="occupation"
          name="occupation"
          required="required"
          onChange={(e) =>
            setAddFormData({ ...addFormData, occupation: e.target.value })
          }
        />
        <input
          type="date"
          className="add-data-inputs-date"
          name="birthday"
          required="required"
          onChange={(e) =>
            setAddFormData({ ...addFormData, birthday: e.target.value })
          }
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddData;
