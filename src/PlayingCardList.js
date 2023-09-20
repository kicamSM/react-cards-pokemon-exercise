import React, { useEffect, useState } from "react";
import uuid from "uuid";
import axios from "axios";
import PlayingCard from "./PlayingCard";
import "./PlayingCardList.css";
// import useAxios from "./hooks/useAxios"
import {useAxios} from './hooks'
// ! note that if you are importing multiple functions from the same file you have to do it this way 

/* Renders a list of playing cards.
 * Can also add a new card at random. */

// const cardTable () => {
//   const [cards, setCards] = useState([]);
//   const addCard = async () => {
//     const data = useAxios("https://deckofcardsapi.com/api/deck/new/draw/"); 
//   setCards(cards => [...cards, { ...response.data, id: uuid() }]);
  

// }; 
// return (
//   <div className="PlayingCardList">
//     <h3>Pick a card, any card!</h3>
//     <div>
//       <button onClick={addCard}>Add a playing card!</button>
//     </div>
//     <div className="PlayingCardList-card-area">
//       {cards.map(cardData => (
//         <PlayingCard key={cardData.id} front={cardData.cards[0].image} />
//       ))}
//     </div>
//   </div>
// );
// }

// CardTable.defaultProps = {};


// function CardTable() {
//   const [cards, setCards] = useState([]);
  // const [data, setData] = useState([])

  // const addCard = async () => {
  //   const response = useAxios(
  //     "https://deckofcardsapi.com/api/deck/new/draw/"
  //   );
  //   setCards(cards => [...cards, { ...response.data, id: uuid() }]);
  // };

  // const [cards, addCard, clearCards] = useAxios(
  //   // "cards",
  //   "https://deckofcardsapi.com/api/deck/new/draw/"
  // );

// function CardTable() {
//     const [cards, setCards] = useState([]);

//   const [data, fetchData] = useAxios("https://deckofcardsapi.com/api/deck/new/draw/") 

//   console.log("fetchData in CardTable:", fetchData)
//   console.log("data in CardTable:", data)

//  console.log("useAxios:", useAxios())
// useEffect(() => {
// async function addCard() {
//   // const response = await data
// // console.log("fetchData in addCard:", fetchData)
// //  const response = await fetchData() 
// // console.log("data inside addCard:", data)
//   // console.log("!!!!!!!!!!!response:", JSON.stringify(response))
//   // console.log("response.data", response.data)
//   // console.log("cards:", cards)
//   setCards(cards => [...cards, { ...data, id: uuid() }]);
// }
//   addCard();
// }, [cards]);

//   return (
//     <div className="PlayingCardList">
//       <h3>Pick a card, any card!</h3>
//       <div>
//         {/* <button onClick={addCard}>Add a playing card!</button> */}
//         <button onClick={fetchData}>Add a playing card!</button>
//       </div>
//       <div className="PlayingCardList-card-area">
//         {cards.map(cardData => (
//           <PlayingCard key={cardData.id} front={cardData.cards[0].image} />
//         ))}
//       </div>
//     </div>
//   );
// }

function CardTable() {
  const [deckId, setDeckId] = useState()
  // * using state to set the deckId also
  const [data, fetchData] = useAxios(`https://deckofcardsapi.com/api/deck/${deckId}/draw/`) 
  // const [data, fetchData] = useAxios(`https://deckofcardsapi.com/api/deck/new/draw/`);

  // console.log("fetchData in CardTable:", fetchData)
  // console.log("data in CardTable:", data)

  useEffect(() => {
    // * if deckId is false then set axios.get to new and then set the deckId
    if (!deckId) {
      // Create a new deck and get the deck ID.
      const createDeck = async () => {
        const response = await axios.get('https://deckofcardsapi.com/api/deck/new/');
        // console.log("response.data.deck_id", response.data.deck_id)
        setDeckId(response.data.deck_id);
      };

      createDeck();
    }
  }, [deckId]);

  return (
    <div className="PlayingCardList">
      <h3>Pick a card, any card!</h3>
      <div>
        <button onClick={fetchData}>Add a playing card!</button>
      </div>
      <div className="PlayingCardList-card-area">
        {data.map(cardData => (
          <div className="PlayingCard-Card-Container"><PlayingCard key={cardData.code} front={cardData.images.svg} style={{width: '300px', height: '500px'}} className="PlayingCard-Card" /></div>
        ))}
      </div>
    </div>
  );
}

CardTable.defaultProps = {};

export default CardTable;
