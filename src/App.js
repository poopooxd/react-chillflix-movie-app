import './App.css';
import { useState } from 'react';
import { Routes, Route} from 'react-router-dom';
import { NavBar } from './components/Navbar';
import MoviePage from './pages/MoviePage';
import TvShowsPage from './pages/TvShowsPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignupPage';
import { ErrorPage } from './pages/ErrorPage';
 

function App() {
  const [isAuth,setIsAuth] = useState(false);
  const [watchLater, setWatchLater] = useState([]);
  const [user, setUser] = useState("admin");
  const [pass, setPass] = useState("admin123");


  // console.log(watchlater)
  return (
    <div>
      {isAuth&& <NavBar isAuth={isAuth} setIsAuth={setIsAuth}/> }
      

      <Routes>
        <Route path="/" element={isAuth?<MoviePage watchLater={watchLater} setWatchLater={setWatchLater}/>:<LoginPage user={user} pass = {pass} isAuth={isAuth} setIsAuth={setIsAuth}/>}/>
        <Route path="/tv-shows" element={<TvShowsPage watchLater={watchLater} setWatchLater={setWatchLater}/>}/>
        
        <Route path="/signup" element={<SignUpPage user= {user} pass = {pass} setUser={setUser} setPass={setPass}/>}/>
        <Route path="*" exact={true} element={<ErrorPage isAuth={isAuth} setIsAuth={setIsAuth}/>}/>
        
      </Routes>

      
    </div>
  );
}

export default App;
