import React from "react";
import "../../components/users/Users.css";
import female from "../../assets/female-avatar-girl-face-woman-user-2.svg";
import male from "../../assets/male-avatar-boy-face-man-user-9.svg";
import useStore from "../../zustand/store";

const Following = () => {
  let users = useStore((state) =>
    state.user.filter((user) => user.follow === true)
  );

  let followUser = useStore((state) => state.follow);

  return (
    <div className="users__wrapper">
      {users?.map((user) => (
        <div key={user.id} className="users__card">
          <img src={user.gender === "male" ? male : female} alt="" />
          <h2>{user.name}</h2>
          <p>{user.username}</p>
          <p>{user.profession}</p>
          <p>{user.age} years old</p>
          <p className="users__card__hour">
            {user?.createdAt?.split("T")[1].slice(0, 5)}
          </p>
          <button onClick={() => followUser(user)}>unFollow</button>
        </div>
      ))}
    </div>
  );
};

export default Following;
