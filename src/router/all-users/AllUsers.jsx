import React from "react";
import "./AllUsers.css";
import Users from "../../components/users/Users";
import Empty from "../../components/empty/Empty";
import { useSelector } from "react-redux";
import useStore from "../../zustand/store";

function AllUsers() {
  let users = useStore((state) => state.user);
  return (
    <div className="all__users">
      {users.length ? <Users data={users} /> : <Empty />}
    </div>
  );
}

export default AllUsers;
