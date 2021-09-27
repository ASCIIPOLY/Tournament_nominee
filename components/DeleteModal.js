import { CardContext } from "../context/CardContext";
import { useContext,useEffect } from "react";

const DeleteModal = () =>{


    const {cards,deleteCard,deletedCardId,handleClose} = useContext(CardContext) ;

    useEffect(() => {
        handleClose();
    }, [cards] )

    return (
        <div className={`${deletedCardId.modal === true ? 'modal-bg bg-active' : 'modal-bg'}`}>
            <div className="modal">
                <div className="modal-header">Removee Nominee</div>
                <div className="modal-body"><p>Do you want to remove <b>{deletedCardId.title}</b> from nominees?</p></div>
                <div className="modal-footer">
                    <button className="btn__cancel" onClick={() => handleClose()}>CANCEL</button>
                    <button className="btn__ok" onClick={() => deleteCard()}>OK</button>
                </div>
            </div>
        </div>
    );

};

export default DeleteModal;