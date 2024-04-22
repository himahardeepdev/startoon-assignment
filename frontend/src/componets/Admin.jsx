import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
function Admin() {
    const [userData , setUserData] = useState({
            email : '',
            password : ''
    });
    const navigate = useNavigate();
   
   
    
    const onChangeHandelr = (e)=>{
        setUserData({
            ...userData , [e.target.name] : e.target.value
        })
    }

    const LoginSubmitHandler = async(e)=>{
        e.preventDefault();
        try {
          let data = await axios.post('http://localhost:5000/admin/login', userData);
          if(data.data){
            localStorage.setItem('userData', JSON.stringify(data.data[0]));
            let userDetails = await axios.get(`http://localhost:5000/admin/${data.data[0].email}`);
            let count = userDetails.data.count + 1;
            await axios.put(`http://localhost:5000/admin/update`,{...userDetails.data , count : count , lastLoginDate : new Date()});
            navigate('/adminhome');
          }   
        } catch (error) {
          console.log(error);
        }   
    }
  return (
    <Form onSubmit={LoginSubmitHandler} className='signin' >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name="email" onChange={(e)=>{onChangeHandelr(e)}} />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name="password" onChange={(e)=>{onChangeHandelr(e)}} />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Admin;