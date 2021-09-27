import Link from "next/link"
import { useContext } from "react";
import { CardContext } from "../context/CardContext";

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faSort } from '@fortawesome/free-solid-svg-icons';

const CardListHeader = () => {

  const {showAlert,deletedCardId,sortByMostVote,sortByLessVote} = useContext(CardContext) ;
  return (
    <>
    
      <div className="header">
        <Link href="/AddForm" ><a className="btn-link"><FontAwesomeIcon icon={faPlus} className="plus_icon"/> ADD NOMİNEE</a></Link>
        <div className="alert" style={showAlert}>
          <p><b>{deletedCardId.title}</b> removed from nominees!</p>
        </div>
        <div className="sort__container">
          <input type="checkbox" id="btnControl"/>
          <label className="btn" htmlFor="btnControl"><FontAwesomeIcon icon={faSort} className="sort_icon"/> SORT BY</label>
          <div className="sort-dropdown__container">
            <div><button className="dropdown-btn" onClick={() => sortByMostVote()}>MOST POINTS</button></div>
            <div><button className="dropdown-btn" onClick={() => sortByLessVote()}>LESS POINTS</button></div>
          </div>
        </div>
        
      </div>
      <div className="text">
        <b>VOTE</b> FOR <b> THE BEST TOURNAMENT </b>STREAMED!
      </div>
    </>
  );
};

export default CardListHeader;
