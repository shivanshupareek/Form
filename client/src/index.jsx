import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import style from "../src/styles/Index.module.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className={style.main}>
      <App />
    </div>
  </React.StrictMode>
);
