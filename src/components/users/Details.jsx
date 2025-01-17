import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

import { useNavigate } from "react-router-dom";

export default function Details() {
  const { id } = useParams();
  // fetch user details from API using the id and display them here.
  const { register, handleSubmit,setValue } = useForm();
const navigate = useNavigate();
  const getDetails = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_BURL}/users/${id}`
    );
    setValue("userName",data.user.userName);
    setValue("email",data.user.email);
    setValue("phone",data.user.phone);

    console.log(data);
  };
  useEffect(() => {
    getDetails();
  }, []);

  const updateUser = async (data) => {
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_BURL}/users/${id}`,
        {
            userName: data.userName,  
        }
      );
      if (response.status === 200) {
        alert("User updated successfully!");
        navigate("/users");
      } else {
        alert("Failed to update user. Please try again.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h2>Update User</h2>
      <form onSubmit={handleSubmit(updateUser)}>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="userName"
            placeholder=""
            {...register("userName")}
          />
          <label htmlFor="userName">User Name</label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="userEmail"
            placeholder=""
            {...register("email")}
            disabled
          />
          <label htmlFor="userEmail">Email Address</label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="userPhone"
            placeholder=""
            {...register("phone")}
            disabled
          />
          <label htmlFor="userPhone">Phone Nbr</label>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}
