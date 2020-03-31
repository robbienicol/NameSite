import React from "react";
import "./styles.css";
import { useGlobalContext } from "./context";
import ToggleDarkMode from "./ToggleDarkMode";

export default function App() {
  const {
    state: { name, darkMode },
    setName
  } = useGlobalContext();

  return (
    <div className={`App ${darkMode ? "darkmode" : ""}`}>
      <ToggleDarkMode />
      <input
        type="text"
        placeholder="Type your name"
        value={name}
        onChange={event => {
          setName(event.target.value);
        }}
      />
      {name}
    </div>
  );
}
