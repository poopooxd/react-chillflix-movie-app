import { useState } from "react";
import MoviesNewReleaseComponent from "../components/MoviesNewReleaseComponent";
import MoviesTrendingComponent from "../components/MoviesTrendingComponent";
import ContinueWatchingComponent from "../components/ContinueWatchingComponent";



const MoviePage = ({watchLater,setWatchLater}) => {
    
    return(
    <div className="moviePage">
        
        {watchLater.length > 0 ? <h2>Continue Watching</h2>:null}
        <ContinueWatchingComponent watchLaterList={watchLater}/>
        
        <h2>Trending Now</h2>
        <MoviesTrendingComponent watchLater= {watchLater}setWatchLater={setWatchLater}/>
        <h2>New Releases</h2>
        <MoviesNewReleaseComponent watchLater={watchLater} setWatchLater={setWatchLater}/>
        
    </div>
    );
};
export default MoviePage;