import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Read() {
  const [data, setData] = useState([]);

  const removeHandler = (id) => {
    axios
      .delete(`http://127.0.0.1:3001/delete/${id}`)
      .then(() => getData())
      .catch((e) => console.log(e.massage));
  };

  function getData() {
    axios
      .get("http://127.0.0.1:3001/getuser")
      .then((res) => {
        console.log(JSON.stringify(res.data));
        setData(res.data);
      })
      .catch((e) => console.log(e.massage));
  }
  useEffect(() => {
    console.log("useEffect");
    getData();
    console.log(JSON.stringify(data) + new Date());
  }, []);

  return (
    <>
       <div className="d-flex justify-content-between mb-3">
        <h2>Read Operation</h2>
        <button type="button" className="btn btn-success">
          Create User
        </button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {data.map((d, i) => {
            let key = i;
            return (
              <tr>
                <th scope="row">{i + 1}</th>
                <td>{d.name}</td>
                <td>{d.email}</td>
                <td>
                  <Link to="/update">
                    <button
                      type="button"
                      className="btn btn-success"
                      onClick={() => {
                        localStorage.setItem("updateData", JSON.stringify(d));
                      }}
                    >
                      edit
                    </button>
                  </Link>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => removeHandler(d._id)}
                  >
                    delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Read;
