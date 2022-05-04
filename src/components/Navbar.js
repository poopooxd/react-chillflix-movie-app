import {Link} from 'react-router-dom';
import {ReactComponent as ReactLogo} from './chillflix.svg';
import { BiSearch } from 'react-icons/bi';


export const NavBar = ({isAuth,setIsAuth}) => {
    const onLogout = () =>{
        setIsAuth(false);
        console.log(isAuth)
    }
   
    return(
        <div className='navBar'>
            <ReactLogo className="logo"width="12%" height="12%" />
            <div className='navLinks'>

                <ul>
                    
                    <li><Link to="/">Movies</Link></li>
                    <li><Link to="/tv-shows">TV Shows</Link></li>
                </ul>
            </div>
            
            <div className='searchBox'> 
                <input type="text" placeholder="search" />
                <div className='biSearch'>
                    <BiSearch/>
                </div> 
            </div>
            <span onClick={onLogout}className='logout'>logout</span>
        </div>
    );
    
};