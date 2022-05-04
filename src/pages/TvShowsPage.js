import { useState } from "react";
import TvShowsTrendingComponent from "../components/TvShowsTrendingComponent";
import TvShowsNewReleaseComponent from "../components/TvShowsNewReleaseComponent";
import ContinueWatchingComponent from "../components/ContinueWatchingComponent";


const TvShowsPage = ({watchLater,setWatchLater}) => {
    
    
    return(
    <div className="tvShowsPage">
        
        {watchLater.length > 0 ? <h2>Continue Watching</h2>:null}
        <ContinueWatchingComponent watchLaterList={watchLater}/>
        
        <h2>Trending Now</h2>
        <TvShowsTrendingComponent watchLater= {watchLater}setWatchLater={setWatchLater}/>
        <h2>New Releases</h2>
        <TvShowsNewReleaseComponent watchLater={watchLater} setWatchLater={setWatchLater}/>
        
    </div>
    );
};
export default TvShowsPage;