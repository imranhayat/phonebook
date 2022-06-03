import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add, getContactState } from "../Redux/contactsSliсe";

import PhoneInput from "react-phone-number-input";
import 'react-phone-number-input/style.css'

import { nanoid } from "nanoid";
import "react-phone-number-input/style.css";

const Form = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [id, setId] = useState("");

  const contacts = useSelector(getContactState);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setName(e.currentTarget.value);
    setId(nanoid());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (number.length > 13) {
      return alert("Please enter correct phone number");
    }

    const checkName = contacts.find((el) => el.name === name);

    checkName === undefined
      ? dispatch(add({ name, number, id }))
      : alert(`${name} is already in contacts.`);

    e.preventDefault();
    reset();
  };

  const reset = () => {
    setName("");
    setNumber("");
    setId("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>&#128211;</h2>
      <h1 className="h3 mb-3 fw-normal">Phone Book</h1>

        <input 
          className="form-control form-control-lg rounded-0"
          onChange={handleInputChange}
          title="Name"
          type="text"
          name="name"
          value={name}
          id="name"
          autoComplete="off"
          required
          placeholder="Enter Name"
        />
      <h5 className="text-start mt-3">Enter Phone Number</h5>
      <PhoneInput
        defaultCountry="US"
        onChange={(number) => {
          setNumber(number);
        }}
        rules={{ required: true }}
        countryCallingCodeEditable={false}
        region="Europe"
        title="Number"
        type="tel"
        required
        name="number"
        value={number}
        autoComplete="off"
        international
        className="form-control form-control-lg rounded-0"
        id="phone"
        maxLength="16"
        placeholder="Enter Phone Number"
      />

      <button className="w-100 btn btn-lg btn-primary rounded-0 mt-4" type="submit">Add contact</button>
    </form>
  );
};

export default Form;
