import React from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import axios from "axios";

import { useNavigate } from "react-router-dom";

export default function Create() {
    const { register, control, handleSubmit } = useForm();
    const navigate = useNavigate();
   // const onSubmit = (data) => console.log(data);
    const registerUser = async(datauser) => {
        
        // Add your API call here to save user data to the database
        const response = await axios.post(`${import.meta.env.VITE_BURL}/users`, datauser);
        if (response.status === 201) {
            alert("User created successfully!");
            navigate("/users");
        } else {
            alert("Failed to create user. Please try again.");
        }
        
    };
  return (
    <>
      <h2>Create User</h2>
      <form onSubmit={handleSubmit(registerUser)}>
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

          />
          <label htmlFor="userEmail">Email Address</label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="password"
            className="form-control"
            id="userPassword"
            placeholder=""
            {...register("password")}
          />
          <label htmlFor="userPassword">Password</label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="userPhone"
            placeholder=""
            {...register("phone")}
          />
          <label htmlFor="userPhone">Phone Nbr</label>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <DevTool control={control} />
    </>
  );
}
