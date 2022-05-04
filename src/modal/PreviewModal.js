
import styles from "styled-components";
import { useCallback, useEffect, useState} from "react";
import {BiCalendar, BiLike} from 'react-icons/bi'



const ModalBackground = styles.div`
    position: fixed;
    z-index: 2;
    bottom:0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    // overflow: auto;
    background-color: rgba(0,0,0,0.5);
`;

const ModalBody = styles.div` 
    
    margin: 10% auto;
    width: 60%;
    max-content: 100%;
    overflow: hidden;
    
`;

const PreviewModal =({movie, toggle, setToggle, watchLater,setWatchLater}) => {
   
    
    
    const onAddWatchList = () => {
        if(!watchLater.includes(movie)){
            const newWatchList = [...watchLater,movie];
            setWatchLater(newWatchList);
        }
        
        
      
    };
      
      
      
    const img_path="https://image.tmdb.org/t/p/w500/"
    return (
        <>
       
        {toggle && <ModalBackground onClick={() =>{setToggle(false)}}>
            <ModalBody onClick={e => e.stopPropagation()}>
                <div className="modalPoster" >
                 <img src={movie.backdrop_path ?`${img_path}${movie.backdrop_path}`:`${img_path}${movie.poster_path}` } />
                 <div className="modalContentContainer">
                    <div className="modalPosterContent">
                        <h1>{movie.title?movie.title:movie.name}</h1>
                        
                        <BiCalendar/><span>{movie.release_date?movie.release_date.split('-')[0]:movie.first_air_date.split('-')[0]}</span>
                        <BiLike/><span>{movie.vote_average}</span>
                        <button onClick={ onAddWatchList}>Add to Watch Later</button>
                            
                    
                        <p>{movie.overview.substring(0,200)}...</p>
                    </div>
                 </div>
                    
                    

                </div>
                
               
            </ModalBody>
        </ModalBackground>} 
        
        </>
    
    )
}
export default PreviewModal;