import { useEffect, useState } from "react"
import "./PokemonCard.css"
import Swal from 'sweetalert2';



function PokemonCard(props) {

    const {pokemon} = props;

    const mostrarPokemon = () => {
        Swal.fire({
            title: pokemon.name,
            text: `HP: ${pokemon.stats[0].base_stat}`,
            imageUrl: pokemon.sprites.front_default,
            confirmButtonText: 'Aceptar'
        });
    };

    return pokemon.id ? (

        <li className="pokemon-card" onClick={() => mostrarPokemon(pokemon)}>
            <h2 className="pokemon-name">{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
            <img src={pokemon.sprites.front_default} alt="pokemon img" className="pokemon-img" />
            <h3 className="text">HP: {pokemon.stats[0].base_stat}</h3>
            <h4 className="text">ID: {pokemon.id} </h4>
        </li>

    ) : (
        <p className="loading">Loading...</p>
    );
}

export default PokemonCard