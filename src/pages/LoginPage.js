import { Link } from "react-router-dom";
import { useState } from "react";
import Wallpaper from '../Wallpaper.png'


const LoginPage = ({user,pass,isAuth,setIsAuth}) => {

    const [inputUser,setInputUser] = useState('');
    const [inputPass,setInputPass] = useState('');

    const handleInputUser = event => {
        setInputUser(event.target.value);
      };
    const handleInputPass = event => {
        setInputPass(event.target.value);
      };
    const onLogin = () => {
        
        

        if(inputUser === user && inputPass === pass ){
            setIsAuth(true)    ;
            
        }
        else{
            alert("Account Not Found. Please create your account.")
        }
        
    };
    return(
        
    
        <>
        <img className="wallpaper" src={Wallpaper}/>
        <div className="login">
            
            <h1>Login.</h1>
            <input onChange={handleInputUser}type="text" placeholder="Username" id="user"/><br/>
            <input onChange={handleInputPass}type="password" placeholder="Password" id="pass"/><br/>
            <button onClick={onLogin}>Login</button>
            
            
            
            <span>Don't have an account? <Link to="/signup">Create Account.</Link></span>
            
        </div>
        </>
        
        
    );

}
export default LoginPage;