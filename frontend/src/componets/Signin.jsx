import React, { useState } from 'react'
import '../App.css';
import Button from 'react-bootstrap/Button';
import Signup from './Signup';
import Login from './Login';
import Admin from './Admin';

const Signin = () => {
    const [showSignup ,setShowSignup ]  = useState("login");
  return (<>
        <div className='sample'>
        <Button variant="outline-primary" onClick={()=>{setShowSignup("login")}}>Sign in</Button>
        <Button variant="outline-primary" onClick={()=>{setShowSignup("sinup")}} >Sign up</Button>
        <Button variant="outline-primary" onClick={()=>{setShowSignup("admin")}} >Admin</Button>
        </div>
        {showSignup === "login" && <h3 className='title'>Login</h3>}
        {showSignup === "sinup" && <h3 className='title'>Signup</h3>}
        {showSignup === "admin" && <h3 className='title'>Admin</h3>}
        <div className='login'>
       
        <div>
            <img src="https://starlabsglassware.com/wp-content/uploads/2023/07/cropped-cropped-insta_post__7_-removebg-preview-1-60x42.png" 
            className='login-img' alt="" />
        </div>
        {showSignup === "login" && <Login/>}
        {showSignup === "sinup" && <Signup/>}
        {showSignup === "admin" && <Admin/>}

        </div>
  </>
   
  )
}

export default Signin;
