import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { GlobalContextProvider } from "./context";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <GlobalContextProvider>
    {" "}
    <App />
  </GlobalContextProvider>,

  rootElement
);
