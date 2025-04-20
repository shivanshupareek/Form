import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Components/App";
import style from "./styles/Index.module.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className={style.main}>
      <App />
    </div>
  </React.StrictMode>
);
