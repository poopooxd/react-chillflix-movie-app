import ContainerComponent from "./ContainerComponent";
import { useCallback, useEffect, useState} from "react";

const TvShowsNewReleaseComponent = ({watchLater,setWatchLater}) => {
    const key="d089b9207b31597cd9952c11f389d2f1";
    
    
    const [newReleaseList, setNewReleaseList] = useState([]);

   

    
    const fetchData = useCallback(() => {
        fetch(`https://api.themoviedb.org/3/tv/airing_today?api_key=${key}&language=en-US&page=1`)
          .then(response => response.json())
          .then(data => setNewReleaseList(data.results));
      }, [])

      useEffect(() =>{
        fetchData()
      },[fetchData])
      return(
        <div className="container">
            <ul >{newReleaseList.map(
                    movie => <ContainerComponent watchLater={watchLater} setWatchLater={setWatchLater} movie={movie}/>
                )}
            </ul>
        </div>
        
      );

};
export default TvShowsNewReleaseComponent;