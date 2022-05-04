import { useState } from "react";
import ContainerComponent from "./ContainerComponent";



const ContinueWatchingComponent = ({watchLaterList}) => {
    
    return(
        <div className="container">
        <ul >{watchLaterList.map(
                movie => <ContainerComponent movie={movie}/>
            )}
        </ul>
        
    </div>
    );
};

export default ContinueWatchingComponent;
