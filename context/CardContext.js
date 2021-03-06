import { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';


export const CardContext = createContext();

const CardContextProvider = (props) => {

    const [cards,setCards] = useState([
        {id:uuidv4(),points:18,title:"Dota2 Tournament",winner:"Furkan",imageUrl:"https://images.unsplash.com/photo-1599399056366-e318f572dbba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",lastUpdated:"22.10.2021 19:29",lastUpdatedNumber:20211022192958},
        {id:uuidv4(),points:12,title:"Cs go Tournament",winner:"ASCIIPOLY",imageUrl:"https://images.unsplash.com/photo-1567603452239-067dfeba033f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",lastUpdated:"23.10.2021 8:48",lastUpdatedNumber:2021102384816},
        {id:uuidv4(),points:16,title:"Valorant Tournament",winner:"Agitator",imageUrl:"https://images.unsplash.com/photo-1511882150382-421056c89033?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",lastUpdated:"16.8.2021 20:12",lastUpdatedNumber:20210816201208},
        {id:uuidv4(),points:7 ,title:"League Of Legends Tournament",winner:"CargoKill",imageUrl:"https://images.unsplash.com/photo-1598550476439-6847785fcea6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",lastUpdated:"22.9.2021 09:29",lastUpdatedNumber:20210922092934},
        {id:uuidv4(),points:5,title:"Assasian Creed Tournament",winner:"Sky Bully",imageUrl:"https://images.unsplash.com/photo-1599399056366-e318f572dbba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",lastUpdated:"16.5.2020 12:43",lastUpdatedNumber:20200516124331},
        {id:uuidv4(),points:2,title:"Call Of Duty: Modern Warfare Tournament",winner:"CobraBite",imageUrl:"https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",lastUpdated:"12.2.2021 14:56",lastUpdatedNumber:20210212145656},
        {id:uuidv4(),points:13,title:"The Witcher 3 Tournament",winner:"Jawbone",imageUrl:"https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",lastUpdated:"05.1.2021 12:26",lastUpdatedNumber:20210105122637},
        {id:uuidv4(),points:4,title:"GTA 5 Tournament",winner:"Knuckles",imageUrl:"https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",lastUpdated:"27.6.2021 11:12",lastUpdatedNumber:20210627111209},
        {id:uuidv4(),points:9,title:"FIFA 21 Tournament",winner:"Acid Gosling",imageUrl:"https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",lastUpdated:"02.12.2021 06:06",lastUpdatedNumber:20211802060638}
    ])
    

    useEffect(() => {

         const cards = localStorage.getItem('cards')
         if (cards !== null){
            setCards(JSON.parse(cards))
         }
            
     }, [])

    useEffect(() => {

         localStorage.setItem('cards', JSON.stringify(cards))

    })

    const GettingMonth = function() {
        var month = new Date().getMonth() + 1;
        return month < 10 ? `${0}${month}` : month; // ('' + month) for string result
      }

    const GettingDates = function() {
        var dates = new Date().getDate();
        return dates < 10 ? `${0}${dates}` : dates; 
      }

    const GettingHours = function() {
        var hours = new Date().getHours() ;
        return hours < 10 ? `${0}${hours}` : hours; // ('' + month) for string result
      }
    
    const GettingMinutes = function() {
        var minutes = new Date().getMinutes() ;
        return minutes < 10 ? `${0}${minutes}` : minutes; // ('' + month) for string result
      }

    
    const GettingSeconds = function() {
        var seconds = new Date().getSeconds() ;
        return seconds < 10 ? `${0}${seconds}` : seconds; // ('' + month) for string result
      }


    var lastUpdated = new Date().getDate()  + "." + (new Date().getMonth()+1) + "." + new Date().getFullYear() + " " +
    new Date().getHours() + ":" + new Date().getMinutes();

    
    var lastUpdatedNumber = `${new Date().getFullYear()}${GettingMonth()}${GettingDates()}${GettingHours()}${GettingMinutes()}${GettingSeconds()}`;
    

    const upVote = (id) => {
        let foundIndex = cards.findIndex(card => card.id === id);
        let foundedCard = cards[foundIndex]
        foundedCard.points += 1 ;
        foundedCard.lastUpdated = lastUpdated ;
        foundedCard.lastUpdatedNumber = lastUpdatedNumber;
        setCards(cards.map((card) => (card.id === id ? foundedCard : card)))
        console.log(lastUpdatedNumber)
        sortByMostVote()
    }

    const downVote = (id) => {
        let foundIndex = cards.findIndex(card => card.id === id);
        let foundedCard = cards[foundIndex]
        foundedCard.points -= 1 ;
        foundedCard.lastUpdated = lastUpdated ;
        foundedCard.lastUpdatedNumber = lastUpdatedNumber;
        setCards(cards.map((card) => (card.id === id ? foundedCard : card)))
        sortByMostVote()
        console.log(cards)

    }

    const addCard = (title,winner,imageUrl) => {
        var lastUpdated = new Date().getDate()  + "." + (new Date().getMonth()+1) + "." + new Date().getFullYear() + " " +
        new Date().getHours() + ":" + new Date().getMinutes();
        setCards([{id:uuidv4(),points:1, title, winner, imageUrl,lastUpdated:lastUpdated,lastUpdatedNumber:lastUpdatedNumber},...cards])
    }


    const [deletedCardId, setDeletedCardId] = useState({modal:false,id:1,title:""});
    

    const deleteOpenModal = (id,title) => {
        
        setDeletedCardId({modal:true,id:id,title:title})
        console.log(deletedCardId.id)
    }

    const handleClose = () => setDeletedCardId({...deletedCardId,modal:false})

    
    const [showAlert, setShowAlert] = useState({visibility:"hidden"});

    const handleShowAlert = () => {
        setShowAlert({visibility:"visible"});
        setTimeout(()=> {
            setShowAlert({visibility:"hidden"});
        }, 2000);
    };



    const deleteCard = () => {
        setCards(cards.filter(card => card.id !==deletedCardId.id))
        handleShowAlert()
    }

    

    const sortByMostVote = () => {
        const sortedCards = cards.sort((a,b)=> {
            if (a.points === b.points){
                return b.lastUpdatedNumber - a.lastUpdatedNumber;
            }
            else{
                return b.points-a.points;
            }
        })
        setCards(sortedCards.map((sortedCard) => sortedCard))
        console.log(cards)
    }


    const sortByLessVote = () => {
        const sortedCards = cards.sort((a,b)=> {
            if (a.points === b.points){
                return a.lastUpdatedNumber - b.lastUpdatedNumber;
            }
            else{
                return a.points-b.points;
            }
        })
        setCards(sortedCards.map((sortedCard) => sortedCard))
        console.log(cards)
    }


    


    return (
        <CardContext.Provider value={{cards,addCard,deleteOpenModal, deletedCardId,deleteCard,handleClose,upVote,downVote,showAlert, sortByMostVote,sortByLessVote}}>
            {props.children}
        </CardContext.Provider>
    )
}

export default CardContextProvider;

