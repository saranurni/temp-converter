import React from "react";
import "./App.css";
import Input from "./components/Input/Input";
import tryConvert from "./lib/tryConvert";

function App() {
  const [values, setValues] = React.useState({ celsius: 0, fahrenheit: 0 });

  const handleChange = (event) => {
    if (event.target.id === "celsius") {
      setValues({
        ...values,
        celsius: event.target.value,
        fahrenheit: tryConvert(event.target.value, "toFahrenheit"),
      });
    } else {
      setValues({
        ...values,
        fahrenheit: event.target.value,
        celsius: tryConvert(event.target.value, "toCelsius"),
      });
    }
  };
  return (
    <>
      <h1 className="my-4 text-center text-2xl font-bold">
        Temperature Converter
      </h1>

      <main>
        <form className="mx-auto mt-8 flex w-1/3 justify-between">
          <Input
            label="Celsius"
            value={Number(values.celsius)}
            changeHandler={handleChange}
          />
          <Input
            label="Fahrenheit"
            value={Number(values.fahrenheit)}
            changeHandler={handleChange}
          />
        </form>
      </main>
    </>
  );
}
export default App;
