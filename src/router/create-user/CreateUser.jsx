import React, { useState } from "react";
import { message } from "antd";
import "./CreateUser.css";
import useStore from "../../zustand/store";
import { useNavigate } from "react-router-dom";

function CreateUser() {
  let users = useStore((state) => state.addUser);
  let user = useStore((state) => state.user);

  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let date = new Date();
    // time
    let timeZoneGMT = (hour) =>
      new Date(date.getTime() + hour * 60 * 60 * 1000);

    let formData = new FormData(e.target);
    let newFormData = Object.fromEntries(formData.entries());
    let { name, username, profession, age, gender } = newFormData;

    // check username
    let checkUsername = user.find((user) => user.username === username);
    if (checkUsername) {
      message.warning("username already exists");
      return;
    }

    let newUser = {
      id: date.getTime(),
      name,
      username,
      profession,
      age: +age,
      gender,
      createdAt: timeZoneGMT(5).toISOString(),
      follow: false,
    };

    users(newUser);
    navigate("/all-users");
    e.target.reset();
  };

  return (
    <div className="create__user">
      <h2>Create User</h2>
      <form onSubmit={handleSubmit} className="create__user-form" action="">
        <input required name="name" type="text" placeholder="name" />
        <input required name="username" type="text" placeholder="username" />
        <input
          required
          name="profession"
          type="text"
          placeholder="profession"
        />
        <input required name="age" type="number" placeholder="age" />
        <select required name="gender" id="">
          <option value="">gender</option>
          <option value="male">male</option>
          <option value="female">female</option>
        </select>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default CreateUser;
