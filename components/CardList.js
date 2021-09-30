import { useContext, useState } from "react";
import { CardContext } from "../context/CardContext";
import Card from "./Card";
import CardListHeader from "./CardListHeader";
import Pagination from "./Pagination";
import DeleteModal from "./DeleteModal";

const CardList = () => {

  const {cards} = useContext(CardContext)

  const[currentPage, setCurrentPage] = useState(1);
  const[cardsPerPage] = useState(8);
  
  const indexOfLastCard = currentPage * cardsPerPage ;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage ;
  const currentCards = cards.slice(indexOfFirstCard,indexOfLastCard) ;
  const totalPagesNum = Math.ceil(cards.length / cardsPerPage) ; //rounds up the division remainder

  return (
    <div className="container">
      <DeleteModal/>
      <CardListHeader/>
      <div className="cards">
        <Card cards={cards} currentCards={currentCards}/>
      </div>
      <Pagination pages = {totalPagesNum} setCurrentPage={setCurrentPage}/>
    </div>

  );
};

export default CardList;
