// import form from "./Form.module.scss";
import form from "../styles/Form.module.scss";
import Name from "./Name";
import Email from "./Email";
import { useState } from "react";

function Form() {
  const [formInput, setFormInput] = useState({
    name: "",
    email: "",
  });

  const [retrievedData, setRetrievedData] = useState("");

  function handleChange(event) {
    setFormInput({ ...formInput, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setRetrievedData([...retrievedData, formInput]);
    setFormInput({ name: "", email: "" });

    fetch("http://localhost:4000/form", {
      method: "POST",
      body: JSON.stringify(formInput),
      headers: {
        "content-type": "application/json",
      },
    });
  }

  return (
    <>
      <main className={form.main}>
        <form className={form.form} onSubmit={handleSubmit}>
          <fieldset className={form.fieldset}>
            <legend className={form.legend}>Complete Form</legend>
            <Name
              formInput={formInput}
              handleChange={handleChange}
              label="Name"
            />
            <Email formInput={formInput} handleChange={handleChange} />
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
