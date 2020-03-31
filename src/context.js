import React, { useReducer, useContext } from "react";
export const GlobalContext = React.createContext();
export const initialState = {
  darkMode: false,
  name: ""
};

export const globalContextReducer = (state, action) => {
  switch (action.type) {
    case "BG_SELECT":
      return {
        ...state,
        darkMode: !state.darkMode
      };
    case "NAME": {
      return {
        ...state,
        name: action.name
      };
    }

    default:
      return state;
  }
};

export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalContextReducer, initialState);
  function handleBackgroundSelect() {
    dispatch({ type: "BG_SELECT" });
  }
  function setName(name) {
    dispatch({ type: "NAME", name });
  }

  return (
    <GlobalContext.Provider value={{ state, handleBackgroundSelect, setName }}>
      {children}
    </GlobalContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
