// src/components/Form
import React from "react";
import { useState } from "react";

function Form({
  firstName,
  lastName,
  handleFirstNameChange,
  handleLastNameChange,
}) {
  const [number, setNumber] = useState(0);
  const [isInvalidNumber, setIsInvalidNumber] = useState(null);

  function handleNumberChange(event){
    const newNumber = parseInt(event.target.value);
    if (newNumber >= 0 && newNumber <= 5) {
      setNumber(newNumber);
    }else {
      setIsInvalidNumber(`${newNumber} is not a valid number!`);
    }
  }

  return (
    <form>
      <input type="text" onChange={handleFirstNameChange} value={firstName} />
      <input type="text" onChange={handleLastNameChange} value={lastName} />
      <input type="number" value={number} onChange={handleNumberChange} />
      {isInvalidNumber ? <span style={{ color: "red" }}>{isInvalidNumber}</span> : null}
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;