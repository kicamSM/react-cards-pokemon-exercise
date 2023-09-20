import React, { useState } from "react";
import backOfCard from "./back.png";
import { useFlip } from "./hooks";
import "./PlayingCard.css"


/* Renders a single playing card. */
function PlayingCard({ front, back = backOfCard }) {
  const [isFacingUp, flip] = useFlip();
  return (
    <img
      src={isFacingUp ? front : back}
      alt="playing card"
      onClick={flip}
      className="PlayingCard Card"
    />
  );
}

export default PlayingCard;

// *****************************************************

// /* Renders a single playing card. */
// function PlayingCard({ front, back = backOfCard }) {
//   // const [isFacingUp, setIsFacingUp] = useState(true);
//   const [isFacingUp, toggleIsFacingUp] = useFlip(true)
//   // const flipCard = () => {
//   //   setIsFacingUp(isUp => !isUp);
//   // };
//   return (
//     <img
//       src={isFacingUp ? front : back}
//       alt="playing card"
//       // onClick={flipCard}
//       onClick={toggleIsFacingUp}
//       className="PlayingCard-Card"
//     />
//   );
// }

// export default PlayingCard;
