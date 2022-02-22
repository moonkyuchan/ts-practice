import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import { ThemeProvider } from "styled-components";
// import "./styles/root.scss";
// import theme from "!!sass-variable-parser!./styles/variables.scss";
// import UseMemo from "./useMemo/useMemo";

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <UseMemo /> */}
  </React.StrictMode>,
  document.getElementById("root")
);
