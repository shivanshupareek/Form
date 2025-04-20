import React from "react";
import { useFormContext } from "./FormContext";
import form from "../styles/Form.module.scss";
import Name from "./Name";
import Email from "./Email";

function Form() {
  const context = useFormContext();

  if (!context) {
    console.error("form context is undefined");
    return (
      <div>
        <p>Something went wrong, please try again later</p>
      </div>
    );
  }

  const { handleSubmit, retrievedData } = context;

  return (
    <>
      <main className={form.main}>
        <form className={form.form} onSubmit={handleSubmit}>
          <fieldset className={form.fieldset}>
            <legend className={form.legend}>Complete Form</legend>
            <Name />
            <Email />
            <button type="submit" className={form.submitButton}>
              Submit
            </button>
          </fieldset>
        </form>

        {retrievedData && (
          <>
            <section>
              {retrievedData.map((inputs, index) => (
                <div key={index}>
                  <h2>Details:</h2>
                  <p>{inputs.name}</p>
                  <p>{inputs.email}</p>
                </div>
              ))}
            </section>
          </>
        )}
      </main>
    </>
  );
}

export default Form;
