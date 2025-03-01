import { useEffect, useState } from 'react'
import PokemonCard from './PokemonCard'
import GetForm from './GetForm'
import "./PokemonList.css"


function PokemonList(props) {

    const [pokemons, setPokemons] = useState([]);


    useEffect(() => {
        getPokemons(1, 151);
    }, [])

    const fetchPokemon = async (index) => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${index}`)
        const data = await response.json()
        return data
    }

    const getPokemons = async (from, to) => {
        const pkmnArr = [];

        for (let i = from; i <= to; i++) {
            const pokemon = await fetchPokemon(i)
            pkmnArr.push(pokemon)
        }

        setPokemons(pkmnArr);
    }

    const getPokemon = async (name) => {
        const pkmnArr = [];
        if(name){
            const pokemon = await fetchPokemon(name)
            pkmnArr.push(pokemon)
            setPokemons(pkmnArr);
        }else{
            getPokemons(1, 151);
        }
       
    }

    const pokemonCards = pokemons.map((pokemon) => {
        return <PokemonCard key={pokemon.id} pokemon={pokemon} selectPokemon={props.selectPokemon} />
    })

    return (
        <div>
            <GetForm getPokemons={getPokemon}></GetForm>
            <ul className='pokemon-list'>
                {pokemonCards}
            </ul>
        </div>
    )
}

export default PokemonList