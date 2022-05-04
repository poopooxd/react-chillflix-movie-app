import ContainerComponent from "./ContainerComponent";
import { useCallback, useEffect, useState} from "react";


const TvShowsTrendingComponent =({watchLater,setWatchLater}) => {
    const key="d089b9207b31597cd9952c11f389d2f1";
    // const [favourite, setFavourite] = useState([])
    // console.log(favourite);
    
    const [trendList, setTrendList] = useState([]);
    
   
    
    
    const fetchData = useCallback(() => {
        fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${key}&language=en-US&page=1`)
          .then(response => response.json())
          .then(data => setTrendList(data.results));
      }, [])

      useEffect(() =>{
        fetchData()
      },[fetchData])
      return(
        <div className="container">
            <ul >{trendList.map(
                    movie => <ContainerComponent watchLater={watchLater} setWatchLater={setWatchLater} movie={movie}/>
                )}
            </ul>
            
        </div>
        
      );

};
export default TvShowsTrendingComponent;