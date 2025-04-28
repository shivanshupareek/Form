import Form from "../src/Components/layout/Form";
import { FormProvider } from "../src/context/FormContext";
import React from "react";
import style from "../src/styles/App.module.scss";

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
