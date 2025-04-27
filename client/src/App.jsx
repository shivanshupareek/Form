import Form from "./Components/Form";
import { FormProvider } from "./Components/FormContext";
import React from "react";
import style from "../styles/App.module.scss";

function App() {
  return (
    <div className={style.app}>
      <FormProvider>
        <Form />
      </FormProvider>
    </div>
  );
}

export default App;
