import { useState } from "react";
import style from "../styles/Name.module.scss";

const capitalChar (value) {
  return value
  .replace(/\b\w/g, (char) => char.toUpperCase())
  .replace(/\s+/g, " ")
  .trim()
}

function Name({ formInput, handleChange, label, ...props }) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <>
      <div
        className={`${style.container} ${
          isFocused || props.value ? style.focused : ""
        }`}
      >
        <label htmlFor="name" id="nameLabel" className={style.label}>
          {label}
        </label>

        <input
          {...props}
          type="text"
          id="name"
          name="name"
          className={style.input}
          value={formInput.name}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={(e) => setIsFocused(e.target.value !== "")}
          aria-required
          autoComplete
          autoFocus
        />
      </div>
    </>
  );
}

export default Name;
