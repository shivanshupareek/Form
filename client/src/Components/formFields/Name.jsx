import React from "react";
import { useState } from "react";
import { useFormContext } from "../../context/FormContext";
import style from "../../styles/Name.module.scss";

function capitalChar(value) {
  return value
    .replace(/\b\w/g, (char) => char.toUpperCase())
    .replace(/\s+/g, " ")
    .trim();
}

function Name() {
  const { register, formInput, errors, handleChange } = useFormContext();
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  function handleBlur(e) {
    setIsFocused(false);
    setHasValue(e.target.value !== "");
  }

  return (
    <>
      <div
        className={`${style.container} ${
          isFocused || formInput?.name ? style.focused : ""
        } ${hasValue ? style.filled : ""}`}
      >
        <div className={style.inputWrapper}>
          <label htmlFor="name" id="nameLabel" className={style.label}>
            Name
          </label>

          <input
            {...register("name", {
              onChange: (event) =>
                handleChange({
                  target: {
                    name: "name",
                    value: capitalChar(event.target.value),
                  },
                }),
            })}
            type="text"
            id="name"
            name="name"
            className={style.input}
            value={formInput.name}
            onFocus={() => setIsFocused(true)}
            onBlur={handleBlur}
            aria-required="true"
            autoComplete="name"
            autoFocus
          />
        </div>
        <span
          className={`${style.subtext} ${
            hasValue ? style.filled : isFocused ? style.highlighted : ""
          }`}
        >
          required
        </span>
      </div>

      {errors.name && <p className={style.error}>{errors.name.message}</p>}
    </>
  );
}

export default Name;
