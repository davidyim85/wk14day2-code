import { useState } from "react";

const Pokemon = (props) => {
    const [pokemons, setPokemons] = useState([{ pokemonName: 'pikachu' }, { pokemonName: 'eevee' }, { pokemonName: 'gengar' }])

    const handleAddStart = () => {
        const addedToStart = [{ pokemonName: 'bulbasaur' }, ...pokemons];
        setPokemons(addedToStart)
    }

    const handleAddEnd = () => {
        const addedToEnd = [...pokemons, { pokemonName: 'charmander' },];
        setPokemons(addedToEnd)
    }

    return (
        <div style={{ backgroundColor: 'hotpink' }}>
            <h6>{props.title}</h6>

            <button onClick={handleAddStart}>add start</button>
            <button onClick={handleAddEnd}>add end</button>
            <ul>
                {
                    pokemons.map((v, i) => <li key={i}>{v.pokemonName}</li>)
                }
            </ul>
        </div>
    )
}

export default Pokemon