function CardTable() {
    const [cards, setCards] = useState([]);
  
    const [data, fetchData] = useAxios("https://deckofcardsapi.com/api/deck/new/draw/") 
    // console.log("fetchData:", fetchData)
  
    
  
    async function addCard() {
      const response = await fetchData
      console.log("response:", response)
      // console.log("response.data", response.data)
      console.log("cards:", cards)
      setCards(cards => [...cards, { ...response.data, id: uuid() }]);
    }
  
  
    return (
      <div className="PlayingCardList">
        <h3>Pick a card, any card!</h3>
        <div>
          <button onClick={fetchData}>Add a playing card!</button>
        </div>
        <div className="PlayingCardList-card-area">
          {cards.map(cardData => (
            <PlayingCard key={cardData.id} front={cardData.cards[0].image} />
          ))}
        </div>
      </div>
    );
  }
  
  CardTable.defaultProps = {};
  
  export default CardTable;