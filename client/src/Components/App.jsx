import Form from "./Form";
import { FormProvider } from "./FormContext";

function App() {
  return (
    <div className="App">
      <FormProvider>
        <Form />
      </FormProvider>
    </div>
  );
}

export default App;
