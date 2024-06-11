import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import useStore from "../../zustand/store";

function Navbar() {
  let data = useStore((state) => state.user);
  const followingCount = data.filter((user) => user.follow).length;
  return (
    <div className="navbar">
      <h2>Zustand</h2>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/create-user"}>Create user</NavLink>
      <NavLink to={"/all-users"}>
        All users <sup>{data.length}</sup>
      </NavLink>
      <NavLink to={"/following"}>
        Following <sup>{followingCount}</sup>
      </NavLink>
    </div>
  );
}

export default Navbar;
