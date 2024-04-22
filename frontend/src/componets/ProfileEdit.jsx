import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../App.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ProfileEdit = (props) => {
    const [userData, setUserData] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("userData"));
        if(data){
            setUserData(data);
        }else{
            navigate('/');
        }
    }, [navigate]);

    if (!userData) {
        return <div>Loading...</div>;
    }

    const onChangeHandelr = (e)=>{
        setUserData({...userData , [e.target.name] : e.target.value})
    }
    const onSubmitHandelr =async (e)=>{
        e.preventDefault();
        try {
             await axios.put(`http://localhost:5000/update`,{...userData });
             localStorage.setItem("userData",JSON.stringify(userData));
            
        } catch (error) {
            console.log(error);
        }
        
    }

    return (
        <div className='profile-edit'>
            <Form onSubmit={onSubmitHandelr} >
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name'  value={userData.name} onChange={onChangeHandelr} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="email"  value={userData.email} onChange={onChangeHandelr}  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password"  value={userData.password} onChange={onChangeHandelr} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicGender">
                    <Form.Label>Gender</Form.Label>
                    <Form.Control type="text" name="gender" value={userData.gender} onChange={onChangeHandelr} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            
        </div>
    );
};

export default ProfileEdit;
