import Card from "./Card";
import { useState } from "react";
import PreviewModal from '../modal/PreviewModal.js'



const ContainerComponent = ({movie,watchLater,setWatchLater}) => {
    const [toggle, setToggle] = useState(false);
    
      
      
    return(
        <div>

              <li onClick={() =>{setToggle(!toggle)}}><Card key={movie.id} movie={movie}/></li> 
                <PreviewModal watchLater={watchLater} setWatchLater={setWatchLater} movie={movie} toggle={toggle} setToggle={setToggle}/>

        </div>
    );
};
export default ContainerComponent;