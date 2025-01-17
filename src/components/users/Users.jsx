import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Users() {
  const [users, setUsers] = useState([]);
  // your code here to fetch and display users data from your API goes here.
  const getUsers = async () => {
    const { data } = await axios.get(`${import.meta.env.VITE_BURL}/users`);
    setUsers(data.users);
  };

  useEffect(() => {
    getUsers();
  }, [users]);

  // delete user function
  const deleteUser = async(userId) => {
    const {data}=await axios.delete(`${import.meta.env.VITE_BURL}/users/${userId}`);
        console.log(data);

    if (data.message == 'User deleted successfully') {
      alert("User deleted successfully!");
  } else {
      alert("Failed to delete user. Please try again.");
  }
  //   //getUsers();
   };

  // your code here to display the fetched users goes here.
  return (
    <>
      <Link className="btn btn-primary my-3" to="/create">
        Create{" "}
      </Link>
      <h2>Users List</h2>

      <section className="users">
        <div className="row">
          {users.map((user) => (
           // <div >
              <div key={user._id} className="col-lg-3 col-md-4 col-sm-6">
                <div className="card" style={{ width: "18rem" }}>
                  <div className="card-body">
                    <h5 className="card-title">UserName : {user.userName}</h5>

                    <h6 className="card-text">{user.email}</h6>
                    <button
                    className="btn btn-danger"
                    onClick={() => deleteUser(user._id)}
                  >
                    Delete
                  </button>
                  <Link className="btn btn-primary ms-3" to={`/users/${user._id}`}>Details</Link>

                  </div>
                  </div>

                 
              </div>
           // </div>
          ))}
        </div>
      </section>
    </>
  );
}
