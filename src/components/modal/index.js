import React from "react";
import { logout, deleteUser } from "../../utils";

export const UserButtons = () => {
  return (
    <div>
      <button onClick={logout}>Logout</button>
      <button onClick={deleteUser}>Delete Account</button>
    </div>
  );
};
