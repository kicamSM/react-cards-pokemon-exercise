import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import axios from "axios";
import PokemonSelect from "./PokemonSelect";
import PokemonCard from "./PokemonCard";
import "./PokeDex.css";
import {useAxios} from './hooks'



/* Renders a list of playing cards.
 * Can also remove all cards,
 * and add a new card, either at random
 * or from a dropdown of available pokemon. */


function PokeDex() {
  const [pokemon, addPokemon, clearPokemon] = useAxios(
    // calling custom hook and passing values for it to execute in hook.js
    "pokemon",
    "https://pokeapi.co/api/v2/pokemon/"
  );
  // calling custom hook from useAxios 

  console.log("addPokemon:", addPokemon)

  return (
    <div className="PokeDex">
      <div className="PokeDex-buttons">
        <h3>Please select your pokemon:</h3>
        <PokemonSelect add={addPokemon} />
        {/* this add that is getting passed is calling the axios hook addPokemon and passing that parameter to the PokemonSelect */}
        {/* we seem to be passing in the addPokemon as the parameter to PokemonSelect */}
        {/* I still dont understand where the pokemon we are choosing is coming from */}
        {/* addPokemon is our function that we are passing into PokemonSelect */}
        <button onClick={clearPokemon}>Delete the pokemon!</button>
      </div>
      <div className="PokeDex-card-area">
        {pokemon.map(card => (
          <PokemonCard key={card.id} {...card} />
        ))}
      </div>
    </div>
  );
}

export default PokeDex;






// ! I am going to continue to look at this but I am also going to move on. I have spent a couple days figuring this out. I appear to be getting confused with the flow of information. I also scheduled and had a on demand mentor. I think I understand the flow of information in the solution. I would have struggled to get there on my own. 

/* Renders a list of pokemon cards.
 * Can also add a new card at random,
 * or from a dropdown of available pokemon. */
// function PokeDex() {
//   const [pokemon, setPokemon] = useState([]);
//   // const [name, setName] = useState([])
//   // const [data, fetchData] = useAxios(`https://pokeapi.co/api/v2/pokemon/${cardData.name}/`)

//   // const addPokemon = async name => {
//   //   const response = await axios.get(
//   //     `https://pokeapi.co/api/v2/pokemon/${name}/`
//   //   );
//   //   setPokemon(pokemon => [...pokemon, { ...response.data, id: uuid() }]);
//   // };
  
//   const [data, addPokemon] = useAxios('https://pokeapi.co/api/v2/pokemon/')
//   // setPokemon(data)
//   console.log("data in Pokedex", data)

//   return (
//     <div className="PokeDex">
//       <div className="PokeDex-buttons">
//         <h3>Please select your pokemon:</h3>
//         <PokemonSelect add={addPokemon} />
//         {/* <PokemonSelect add={fetchData} /> */}
//       </div>
//       <div className="PokeDex-card-area">
//         {/* {pokemon.map(cardData => ( */}
//         {data?.map(cardData => (
//           <PokemonCard
//             key={cardData.id}
//             front={cardData.sprites.front_default}
//             back={cardData.sprites.back_default}
//             name={cardData.name}
//             stats={cardData.stats.map(stat => ({
//               value: stat.base_stat,
//               name: stat.stat.name
//             }))}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default PokeDex;
