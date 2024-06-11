import React, { useState, useEffect } from "react";
import "./Users.css";
import male from "../../assets/male-avatar-boy-face-man-user-9.svg";
import female from "../../assets/female-avatar-girl-face-woman-user-2.svg";
import Modal from "../modal/Modal";
import useStore from "../../zustand/store";

const initialState = {
  id: 0,
  name: "",
  username: "",
  profession: "",
  age: "",
  gender: "",
};

function Users({ data }) {
  const [editData, setEditData] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState(initialState);

  let removeUser = useStore((state) => state.removeUser);
  let followUser = useStore((state) => state.follow);
  let editUser = useStore((state) => state.editUser);

  useEffect(() => {
    const { name, username, profession, age, gender, id } =
      editData || initialState;
    setFormData({ name, username, profession, age, gender, id });
  }, [editData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    editUser(formData);
    setShowModal(false);
  };

  return (
    <>
      <div className="users__wrapper">
        {data?.map((user) => (
          <div key={user.id} className="users__card">
            <img src={user.gender === "male" ? male : female} alt="" />
            <h2>{user?.name}</h2>
            <p>{user?.username}</p>
            <p>{user?.profession}</p>
            <p>{user?.age} years old</p>
            <p className="users__card__hour">
              {user?.createdAt?.split("T")[1].slice(0, 5)}
            </p>
            <button onClick={() => removeUser(user)}>Remove</button>
            <button onClick={() => followUser(user)}>
              {user?.follow ? "unFollow" : "Follow"}
            </button>
            <button
              onClick={() => {
                setShowModal(true);
                setEditData(user);
              }}
              className="users__card__edit"
            >
              Edit
            </button>
          </div>
        ))}
      </div>
      <Modal setShowModal={setShowModal} showModal={showModal}>
        <form
          onSubmit={handleUpdate}
          className={`modal__form ${showModal ? "show" : ""}`}
          action=""
        >
          <input
            value={formData?.name}
            name="name"
            onChange={handleChange}
            required
            type="text"
            placeholder="name"
          />
          <input
            value={formData?.username}
            name="username"
            onChange={handleChange}
            required
            type="text"
            placeholder="username"
          />
          <input
            value={formData?.profession}
            name="profession"
            onChange={handleChange}
            required
            type="text"
            placeholder="profession"
          />
          <input
            value={formData?.age}
            name="age"
            onChange={handleChange}
            required
            type="number"
            placeholder="age"
          />
          <select
            value={formData?.gender}
            name="gender"
            onChange={handleChange}
            required
            id=""
          >
            <option value="">gender</option>
            <option value="male">male</option>
            <option value="female">female</option>
          </select>
          <button type="submit">Save</button>
          <button type="button" onClick={() => setShowModal(false)}>
            Close
          </button>
        </form>
      </Modal>
    </>
  );
}

export default Users;
