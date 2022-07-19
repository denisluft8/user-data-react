import React, { useState } from "react";
import { userArr } from "../../mock/users";

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
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        placeholder="name"
        name="name"
        required="required"
        onChange={(e) =>
          setAddFormData({ ...addFormData, name: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="email"
        name="email"
        required="required"
        onChange={(e) =>
          setAddFormData({ ...addFormData, email: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="occupation"
        name="occupation"
        required="required"
        onChange={(e) =>
          setAddFormData({ ...addFormData, occupation: e.target.value })
        }
      />
      <input
        type="date"
        name="birthday"
        required="required"
        onChange={(e) =>
          setAddFormData({ ...addFormData, birthday: e.target.value })
        }
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddData;
