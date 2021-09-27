import { CardContext } from "../context/CardContext";
import { useContext } from "react";

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
                            <button className="btn-down" onClick={() => downVote(card.id)}><i className="fas fa-angle-down"></i>DOWN</button>
                            <button className="btn-up" onClick={() => upVote(card.id)}><i className="fas fa-angle-up"></i>UP</button>
                        </div>
                        <button className="delete" onClick={() => {deleteOpenModal(card.id,card.title) }}>DELETE</button>
                    </div>
                </div>         
            </div>
            
        ))
    )


}

export default Card ;