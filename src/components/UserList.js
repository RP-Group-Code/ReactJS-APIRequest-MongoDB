import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Userlist = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    const response = await axios.get("http://localhost:5000/users");
    setUser(response.data);
  };

  const deleteUser = async (id) =>{
    try {
      await axios.delete(`http://localhost:5000/users/${id}`);
      getUser();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="columns mt-5">
      <div className="columns is-half">
        <div className="card">
          <Link to="add" className="button is-success">
            Create New
          </Link>
          <table className="table is-striped is-fullwidth mt-5">
            <thead>
              <tr>
                <th>No</th>
                <th>Nama</th>
                <th>Email</th>
                <th>Genders</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user._id} const id={user._id}>
                  <th>{index + 1}</th>
                  <th>{user.name}</th>
                  <th>{user.email}</th>
                  <th>{user.gender}</th>
                  <th>
                    <Link
                      to={`edit/${user._id}`}
                      type="submit"
                      className="button is-primary m-2"
                    >
                      Edit
                    </Link>
                    <button
                      type="submit" onClick={() => deleteUser(user._id)}
                      className="button is-danger m-2"
                    >
                      Delete
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Userlist;
