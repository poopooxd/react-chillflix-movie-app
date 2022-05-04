import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Wallpaper from '../Wallpaper.png'
import History from "../History";

const SignUpPage = ({user,setUser,pass,setPass}) =>{
    const navigate= useNavigate();

    const [inputUser,setInputUser] = useState('');
    const [inputPass,setInputPass] = useState('');
    const [inputConfirmPass,setInputConfirmPass] = useState('');

    const handleInputUser = event => {
        setInputUser(event.target.value);
      };
    const handleInputPass = event => {
        setInputPass(event.target.value);
      };
    const handleInputConfirmPass = event => {
        setInputConfirmPass(event.target.value);
      };
    const onSignUp = () => {
        
        

        if(inputUser === '' || inputPass === ''){
            alert("Please enter details in field")
            
            
        }
        else{
            if(inputConfirmPass ===  inputPass  ){
                setUser(inputUser)
                setPass(inputPass)
                alert("You have now created your account. Please proceed to log in page")
                              
                
            }
            else{
                alert("Password not match!")
            }
        }
        navigate('/')
    };
    return(
        <>
        <img className="wallpaper" src={Wallpaper}/>
        <div className="login">
            
            <h1>SignUp.</h1>
            <input onChange={handleInputUser}type="text" placeholder="Username" id="confrim-user"/><br/>
            <input onChange={handleInputPass}type="password" placeholder="Password" id="confrim-pass"/><br/>
            <input onChange={handleInputConfirmPass}type="password" placeholder="Confirm Password" id="confrim-pass"/><br/>
            <button onClick={onSignUp}>Sign Up</button>
            
            
            
            <span>Already have an account? <Link to="/">Log in.</Link></span>
            
        </div>
        </>)
}
export default SignUpPage;