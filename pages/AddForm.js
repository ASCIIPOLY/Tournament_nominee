
import Link from "next/link"
import { useContext,useState } from "react";
import { CardContext } from '../context/CardContext';
import styles from "../styles/AddForm.module.scss"
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
  


const AddForm  = () => {


    const {addCard} = useContext(CardContext)

    const [title,setTitle] = useState("");
    const [winner,setWinner] = useState("");
    const [imageUrl,setImageUrl] = useState("");

    const [showAlertinForm,setShowAlertinForm] = useState({visibility:"hidden"});
    
    // const[newCard, setNewCard] = useState({
    //     title:"", winner:"", imageUrl:""
    // })

    // const {title,winner,imageUrl} = newCard 

    // const onInputChange = (e) => {
    //     setNewCard({...newCard,[e.target.name]:e.target.value})
    // }

    const handleShowAlert = () => {
        setShowAlertinForm({visibility:"visible"});
        setTimeout(()=> {
            setShowAlertinForm({visibility:"hidden"});
        }, 2000);
    };

    
    const handleSubmit = (e) =>{
        e.preventDefault();
        addCard(title,winner,imageUrl);
        
        setTitle("")
        setWinner("")
        setImageUrl("")
        handleShowAlert()
        
    }

    return (
        <>
            <div className={styles.container_form}>
                <div className={styles.form__header}>
                    <Link href="/"  ><a className={styles.btn_back}><FontAwesomeIcon icon={faChevronLeft} className={styles.left_icon}/>Go Back</a></Link>
                    <div className={styles.form__alert} style={showAlertinForm}>
                        <p>New nominee added to nominees!</p>
                    </div>
                </div>

                <div className={styles.form__content_container}>
                    <form onSubmit={handleSubmit}>
                        <p className={styles.form__text}>ADD NEW NOMINEE</p>
                        <label htmlFor="tournament_name">Tournament Name</label>
                        <input type="text" id="tournament_name" onChange={e => setTitle(e.target.value)} required value={title}/>
                        <label htmlFor="tournament_winner">Tournament Winner Team</label>
                        <input type="text"  id="tournament_winner" onChange={e => setWinner(e.target.value)} required value={winner}/>
                        <label htmlFor="imageURL">Cover Image URL</label>
                        <input type="text"  id="imageURL" onChange={e => setImageUrl(e.target.value)} required value={imageUrl}/>
                        <button type="submit" className={styles.btn_submit}>ADD NOMINEE</button>
                    </form>
                </div>
            </div>
    
        </>
  );
};

export default AddForm ;
