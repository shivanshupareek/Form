import React from "react";
import { useFormContext } from "./FormContext";

function Email() {
  const { register, handleChange, formInput, errors } = useFormContext();

  return (
    <>
      <label htmlFor="email" id="emailLabel">
        Email:
      </label>

      <input
        {...register("email", {
          onChange: (event) =>
            handleChange({
              target: { name: "email", value: event.target.value },
            }),
        })}
        type="email"
        id="email"
        name="email"
        title="email"
        value={formInput.email}
        placeholder="example@mail.com"
        aria-required="true"
        autoComplete="email"
      />

      {errors.email && <p>{errors.email.message}</p>}
    </>
  );
}

export default Email;
