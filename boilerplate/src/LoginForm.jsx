import React, { useState } from "react";
import { useUser } from "./UserContext";

const LoginForm = () => {
  const [name, setName] = useState("");
  const { login } = useUser();

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ name });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Masukkan nama"
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
