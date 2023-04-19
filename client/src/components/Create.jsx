import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Create() {
  const [userData, setUserData] = useState({ name: "", email: "" });

  const history = useNavigate();
  const NameHandler = (e) => {
    setUserData({ ...useState, name: e.target.value });
  };
  const EmailHandler = (e) => {
    setUserData({ ...userData, email: e.target.value });
  };
  const header = { "Access-control-Allow_Origin": "*" };
  const OnSubmitHandler = async (e) => {
    e.preventDefault();
    console.log("submit");

    axios
      .post("http://127.0.0.1:3001/create", {
        name: userData.name,
        email: userData.email,
        header,
      })
      .then((data) => {
        console.log(data);
        history("/read");
      })
      .catch((e) => console.log(e.massage));
  };
  return (
    <>
      <div className="d-flex justify-content-between mb-3">
        <h2>Create Operation</h2>
        <button type="button" className="btn btn-success">
          All User
        </button>
      </div>
      <form>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            value={userData.name}
            onChange={NameHandler}
          />
        </div>
        <div className="mb-3">
          Email address
          <label className="form-label"></label>
          <input
            type="text"
            className="form-control"
            value={userData.email}
            onChange={EmailHandler}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={OnSubmitHandler}
        >
          Submit
        </button>
      </form>
    </>
  );
}

export default Create;
