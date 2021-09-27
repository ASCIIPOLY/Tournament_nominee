import { useState, useEffect } from "react";


const Pagination = ({pages, setCurrentPage}) => {

    const numOfPages = [];

    for(let i=1; i<=pages; i++){
        numOfPages.push(i)
    }

    const [currentButton, setCurrentButton] = useState(1);

    useEffect(()=> {
        setCurrentPage(currentButton)
    }, [currentButton, setCurrentPage])

    return(
        <div className="pagination__container">
            <ul className="pagination">
                {
                    numOfPages.map((page, index) => {
                        return (
                            <li key={index} className={`${currentButton === page ? 'page-item active' : 'page-item'}`}><a href="#!" className={`${currentButton === page ? 'page-link text-white' : 'page-link'}`}
                            onClick = {() => setCurrentButton(page)}>{page}</a></li>
                        )
                        
                    })
                }
               
            </ul>
        </div>
    )
}

export default Pagination;
