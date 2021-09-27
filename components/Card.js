import { CardContext } from "../context/CardContext";
import { useContext } from "react";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp} from '@fortawesome/free-solid-svg-icons';

const Card = ({cards, currentCards}) => {

    const {upVote,downVote,deleteOpenModal} = useContext(CardContext) ;

    const truncateOverview = (string, maxLength) => {
        if (!string) return null;
        if (string.length <= maxLength ) return string;
        return `${string.substring(0, maxLength)} ...`;
    }

    return (
        currentCards.map((card,index)=>(
            <div className="card" key={card.id}>
                <div className="card__image-container">
                    <div className="point-container">
                        <p>{card.points}</p>
                        <p>POINTS</p>
                    </div>
                    <img src={card.imageUrl} alt="game-img"/>
                </div>
                <div className="card__content">
                    <p className="card__content-title">{truncateOverview(card.title,24)}</p>
                    <div className="card__info">
                        <p><b>Winner: </b>{card.winner}</p>
                        <p><b>Last Vote Date: </b>{card.lastUpdated}</p>
                    </div>
                    <div className="btn-container">
                        <div className="btn__group-container">
                            <button className="btn_down" onClick={() => downVote(card.id)}><FontAwesomeIcon icon={faAngleDown} className="angle_down"/>DOWN</button>
                            <button className="btn_up" onClick={() => upVote(card.id)}><FontAwesomeIcon icon={faAngleUp} className="angle_up"/>UP</button>
                        </div>
                        <button className="delete" onClick={() => {deleteOpenModal(card.id,card.title) }}>DELETE</button>
                    </div>
                </div>         
            </div>
            
        ))
    )


}

export default Card ;