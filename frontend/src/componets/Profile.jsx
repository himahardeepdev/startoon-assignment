import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import ProfileShow from './ProfileShow';
import ProfileEdit from './ProfileEdit';

const Profile = () => {
    const [show , setShow] = useState(true);
    const [userData , setUserData]= useState(JSON.parse(localStorage.getItem("userData")));
    const navigate = useNavigate();
    useEffect(()=>{
       const data =  localStorage.getItem("userData");
       if(!data){
        navigate('/');
       }else{
        setUserData(JSON.parse(data));
       }
    },[navigate]);
  return (
    <div>
        <nav>
            <Nav fill variant="tabs" defaultActiveKey="/home">
            <Nav.Item>
                    <Nav.Link eventKey="link-2" onClick={()=>{setShow(true)}}  >Show</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                    <Nav.Link eventKey="link-1" onClick={()=>{setShow(false)}}>Edit</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                    <Nav.Link onClick={()=>{localStorage.removeItem("userData"); navigate("/")}}  >Log out</Nav.Link>
                </Nav.Item>
            </Nav>
        </nav>

    
        {
            show ?  <ProfileShow userData={userData} /> : <ProfileEdit />
        }
     
    </div>
  )
}

export default Profile
