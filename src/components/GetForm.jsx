import {  useState } from 'react'
import "./GetForm.css"

function GetForm(props) {
    const [name, setName] = useState('');

    const handleName = (e) => {
        setName(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.getPokemons(name);
        
    }

  return (
    <form onSubmit={handleSubmit}>
        <fieldset>
            <label htmlFor="from-pokemon">Nombre: </label>
            <input type="text" id='from-pokemon' onChange={handleName} />
        </fieldset>

        <button>Get Pokemon!</button>
    </form>
  )
}

export default GetForm