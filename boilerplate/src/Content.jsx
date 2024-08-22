import React from "react";
import { useTheme } from "./ThemeContext";

const Content = () => {
  const { theme } = useTheme();

  return (
    <main
      style={{
        padding: "20px",
        backgroundColor: theme === "light" ? "#fff" : "#555",
        color: theme === "light" ? "#000" : "#fff",
      }}
    >
      <p>This is a {theme === "light" ? "light" : "dark"}</p>
    </main>
  );
};

export default Content;
