import React, { useEffect, useState } from "react";
import uuid from "uuid";

import PlayingCard from "./PlayingCard";
import "./PlayingCardList.css";
import { formatCard } from "./helpers";
import {useAxios} from './hooks'
// ! note that if you are importing multiple functions from the same file you have to do it this way 

/* Renders a list of playing cards.
 * Can also add a new card at random.
* or remove all cards. */
function CardTable() {
  const [cards, addCard, clearCards] = useAxios(
    "cards",
    "https://deckofcardsapi.com/api/deck/new/draw/"
  );
  return (
    <div className="PlayingCardList">
      <h3>Pick a card, any card!</h3>
      <div>
        <button onClick={() => addCard(formatCard)}>Add a playing card!</button>
        <button onClick={clearCards}>Clear the table</button>
      </div>
      <div className="PlayingCardList-card-area">
        {cards.map(card => (
          <PlayingCard key={card.id} front={card.image} />
        ))}
      </div>
    </div>
  );
}


// ***************************************

// function CardTable() {
//   console.log("This is the CardTable")
//   return "This is the CardTable"
// }

// *************************************************************
// *bottom line is working 

// function CardTable() {
//   const [deckId, setDeckId] = useState()
//   // * using state to set the deckId also
//   const [data, fetchData] = useAxios(`https://deckofcardsapi.com/api/deck/${deckId}/draw/`) 
//   // const [data, fetchData] = useAxios(`https://deckofcardsapi.com/api/deck/new/draw/`);

//   // console.log("fetchData in CardTable:", fetchData)
//   // console.log("data in CardTable:", data)

//   useEffect(() => {
//     // * if deckId is false then set axios.get to new and then set the deckId
//     if (!deckId) {
//       // Create a new deck and get the deck ID.
//       const createDeck = async () => {
//         const response = await axios.get('https://deckofcardsapi.com/api/deck/new/');
//         // console.log("response.data.deck_id", response.data.deck_id)
//         setDeckId(response.data.deck_id);
//       };

//       createDeck();
//     }
//   }, [deckId]);

//   return (
//     <div className="PlayingCardList">
//       <h3>Pick a card, any card!</h3>
//       <div>
//         <button onClick={fetchData}>Add a playing card!</button>
//       </div>
//       <div className="PlayingCardList-card-area">
//         {data.map(cardData => (
//           <div className="PlayingCard-Card-Container"><PlayingCard key={cardData.code} front={cardData.images.svg} style={{width: '300px', height: '500px'}} className="PlayingCard-Card" /></div>
//         ))}
//       </div>
//     </div>
//   );
// }

CardTable.defaultProps = {};

export default CardTable;
