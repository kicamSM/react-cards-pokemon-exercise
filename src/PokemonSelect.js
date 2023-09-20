import React, { useState } from "react";
import pokemonList from "./pokemonList";
import { choice, formatPokemon } from "./helpers";

/* Select element to choose from common pokemon. */
function PokemonSelect({ add, pokemon = pokemonList }) {
  // * function takes two parameters add --> so the add is what the pokemon is and then the pokemon whcih is the pokemon list by default pokemonList we are importing 
  // console.log("add in PokemonSelect:", add)
  const [pokeIdx, setPokeIdx] = useState(0);
  const handleChange = evt => {
    console.log("evt.target.value:", evt.target.value)
    setPokeIdx(evt.target.value);

  };

  console.log("pokemon[pokeIdx]:", pokemon[pokeIdx])


  return (
    <div>
      <select onChange={handleChange}>
        {pokemon.map((p, idx) => (
          <option key={idx} value={idx}>
            {p}
          </option>
        ))}
      </select>
      <button onClick={() => add(formatPokemon, pokemon[pokeIdx])}>
        {/* we are passing this pokemon -- useAxios hook is then getting called and passed that informatio namely formated pokemon and the pokemon selected  */}
        {/* This is where the pokemon name is coming from. It is getting passed into the add on the onClick which is confusing becaus the add is being passed into this function -- note format pokemon is also being passed in*/}
        Catch one!
      </button>
      <button onClick={() => add(formatPokemon, choice(pokemon))}>
        I'm feeling lucky
      </button>
    </div>
  );
}

export default PokemonSelect;

