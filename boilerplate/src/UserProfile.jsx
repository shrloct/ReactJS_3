import React from "react";
import { useUser } from "./UserContext";

const UserProfile = () => {
  const { user, logout } = useUser();

  if (!user) {
    return <p>Silakan login untuk melihat informasi pengguna.</p>;
  }

  return (
    <div>
      <h1>Selamat datang, {user.name}!</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default UserProfile;
