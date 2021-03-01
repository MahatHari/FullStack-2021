
import React, { useState } from 'react'

const App = () => {
    const [persons, setPersons] = useState([
        {name:'Arto Hellas'}
    ])

    const [newName, setNewName] = useState('')
    const handleChange = (e) => {
       
        setNewName(e.target.value)
    }
    const addPerson = (e) => {
        
        e.preventDefault()
        let personObj = {
            name:newName
        }
        console.log(personObj.name)
        setPersons(persons.concat(personObj))
        setNewName('')
    }
    
    return (
        <div>
            <h2>PhoneBook</h2>
            <form onSubmit={addPerson} >
                <div>Name:</div>
                <input type="text" onChange={handleChange} value={newName} placeholder="Type Name here "/>
                <div>
                    <button type="submit" >Add</button>
                </div>
            </form>
            <h2>Numbers</h2>

            <ul>
                {persons.map((person, i)=>
                    <li key={i}>{person.name}</li>
                )}
            </ul>
            

        </div>
    )
}

export default App;