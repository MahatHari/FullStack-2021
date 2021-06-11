import React, { useState } from 'react';

const initialValue = {
  name: '',
  phone: '',
};
const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValue);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  return {
    values,
    setValues,
    handleChange,
  };
};

const App = (initialValue) => {
  const { values, setValues, handleChange } = useForm(initialValue);

  const [newPerson, setNewPerson] = useState({
    name: values.name,
    phone: values.phone,
  });
  console.log(newPerson);

  /*  const handleChange = (e) => {
    setNewPerson(e.target.value);
  }; */
  /* const addPerson = (e) => {
    e.preventDefault();
    let personObj = {
      name: newPerson.name,
      phone: newPerson.phone,
    };
    const a = persons.filter((person) => person.name === newPerson);
    a.length === 0
      ? setPersons(persons.concat(personObj))
      : alert(`${newPerson} is already added to Phonebook`);

    setNewPerson('');
  }; */

  return (
    <div>
      <h2>PhoneBook</h2>
      <form>
        <div>Name:</div>
        <input
          type='text'
          name='name'
          label='name'
          value={values.name}
          onChange={handleChange}
          placeholder='Type Name here '
        />
        <div>
          <div>Name:</div>
          <input
            type='text'
            name='phone'
            label='phone'
            value={values.phone}
            onChange={handleChange}
            placeholder='Type Phone Number here '
          />
          <div></div>
          <button type='submit'>Add</button>
        </div>
      </form>
      <h2>Numbers</h2>

      <ul>
        {/* {persons.map((person, i) => (
          <li key={i}>{person.name}</li>
        ))} */}
      </ul>
    </div>
  );
};

export default App;
