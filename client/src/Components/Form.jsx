import { useFormContext } from "./FormContext";
import form from "../styles/Form.module.scss";
import Name from "./Name";
import Email from "./Email";

function Form() {
  const { handleSubmit, retrievedData } = useFormContext;
  return (
    <>
      <main className={form.main}>
        <form className={form.form} onSubmit={handleSubmit}>
          <fieldset className={form.fieldset}>
            <legend className={form.legend}>Complete Form</legend>
            <Name label="Name" />
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
