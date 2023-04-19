import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Update() {
  const history = useNavigate();
  const updateData = (JSON.parse(localStorage.getItem("updateData"))||false)
  const [userData, setUserData] = useState({
    name: updateData.name||"",
    email: updateData.email||"",
  });   

  const header = { "Access-control-Allow_Origin": "*" };

  const NameHandel = (e) => {
    setUserData({ ...userData, name: e.target.value });
  };

  const EmailHandler = (e) => {
    setUserData({ ...userData, email: e.target.value });
  };

  const UpdateHandler = (e) => {
    e.preventDefault();

    axios
      .put(`http://127.0.0.1:3001/updateuser/${updateData._id}`, {
        ...userData,
        header,
      })
      .then((data) => {
        console.log(data);
        localStorage.removeItem('updateData')
        history("/read");
      })
      .catch((e) => console.log(e.massage));
  };

  return (
    <>
      <h2>UPDATE</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            aria-describedby="emailHelp"
            value={userData.name}
            onChange={NameHandel}
          />
        </div>
        <div className="mb-3">
          Email address
          <label className="form-label"></label>
          <input
            type="email"
            className="form-control"
            value={userData.email}
            onChange={EmailHandler}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={UpdateHandler}
        >
          Update
        </button>
      </form>
    </>
  );
}

export default Update;
