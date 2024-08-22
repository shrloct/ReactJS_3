import React from "react";
import { UserProvider } from "./UserContext";
import { CounterProvider } from "./CounterContext";
import LoginForm from "./LoginForm";
import UserProfile from "./UserProfile";
import Counter from "./Counter";

const App = () => (
  <UserProvider>
    <CounterProvider>
      <div>
        <h1>Aplikasi Pengguna dan Counter</h1>
        <LoginForm />
        <UserProfile />
        <Counter />
      </div>
    </CounterProvider>
  </UserProvider>
);

export default App;
