import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Signup() {
    const [userData , setUserData] = useState({
            name:'',
            email : '',
            password : '',
            gender : '',
            repassword : ''
    });
    const navigate = useNavigate();
    const notify = () => toast("EMail alreay exist");
    const onChangeHandelr = (e)=>{
        setUserData({
            ...userData , [e.target.name] : e.target.value
        })
    }

    const SignupSubmitHandler =async (e)=>{
        e.preventDefault();
        try {
          const data = await axios.get(`http://localhost:5000/${userData.email}`);
          console.log(data);
          if (data.data) {
            notify();
          }else{
             await axios.post("http://localhost:5000/signup",{...userData,count : 1 , lastLoginDate : new Date()});
              localStorage.setItem("userData" , JSON.stringify(userData));
            
          }
        } catch (error) {
          console.log(error);
        }
        navigate('/profile');

        
    }
    
  return (
    <Form onSubmit={SignupSubmitHandler} className='signup' >
        <Form.Group className="mb-3" >
            <Form.Label>User Name</Form.Label>
            <Form.Control type="text" placeholder="User Name " name="name" onChange={(e)=>{onChangeHandelr(e)}} required />
        </Form.Group>

        <Form.Group className="mb-3" >
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name="email" onChange={(e)=>{onChangeHandelr(e)}} required />
        </Form.Group>

        <Form.Group className="mb-3" >
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" name="password" onChange={(e)=>{onChangeHandelr(e)}} required />
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>Re Password</Form.Label>
            <Form.Control type="password" placeholder="Enter Re password" name="repassword" onChange={(e)=>{onChangeHandelr(e)}} required />
        </Form.Group>
        <Form.Check
            inline
            label="Male"
            name="gender"
            type="radio"
            value="Male"
            id={`inline-radio-1`}
          
          onChange={(e)=>{onChangeHandelr(e)}} 
          />
          <Form.Check
            inline
            label="Female"
            name="gender"
            type="radio"
            value="Female"
            id={`inline-radio-2`}
            
            onChange={(e)=>{onChangeHandelr(e)}} 
          />
        <br />
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <ToastContainer />
    </Form>    
  );
}

export default Signup;