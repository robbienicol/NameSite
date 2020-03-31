import React from "react";
import { useGlobalContext } from "./context";

const ToggleDarkMode = () => {
  const globalContext = useGlobalContext();
  return (
    <button
      onClick={() => {
        globalContext.handleBackgroundSelect();
      }}
    >
      Dark Mode {globalContext.state.darkMode ? "ON" : "OFF"}
    </button>
  );
};

export default ToggleDarkMode;
