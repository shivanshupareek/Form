import { createContext, useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import formSchema from "./formSchema";

const formContext = createContext();

export function FormProvider({ children }) {
  //this is for the react-hook-form set-up
  //we set register to register any state changes, setValue to handle the values inside the fields
  const {
    register,
    handleSubmit,
    setValue,
    FormState: { error },
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "" },
  });

  //this is for the local state handling
  const [formInput, setFormInput] = useState({
    name: "",
    email: "",
  });

  /*
  this will handle all the changes in an input field 
  and sync it with react-hook-form
  */
  function handleChange(event) {
    const { name, value } = event.target;
    setFormInput((prev) => ({ ...prev, [name]: value }));
    setValue(name, value);
  }

  //this is to display the retrieved data from the form
  const [retrievedData, setRetrievedData] = useState([]);

  //this is for the submission of form
  function onSubmit(data) {
    setRetrievedData((prev) => ({ ...prev, data }));
    setFormInput({ name: "", email: "" });

    fetch("http://localhost:4000/form", {
      method: "POST",
      body: JSON.stringify(formInput),
      headers: {
        "content-type": "application/json",
      },
    });
  }

  const value = {
    register,
    handleSubmit: handleSubmit(onSubmit),
    error,
    setValue,
    setFormInput,
    retrievedData,
    handleChange,
  };

  return (
    <>
      <formContext.Provider value={value}>{children}</formContext.Provider>
    </>
  );
}

export function useFormContext() {
  return useContext(formContext);
}
