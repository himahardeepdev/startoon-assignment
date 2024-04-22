import React,{ useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
const ProfileShow = () => {
    const [userData , setUserData ] = useState({});
 
    const navigate = useNavigate();
    useEffect(()=>{
       const data =  localStorage.getItem("userData");
       if(!data){
        navigate('/');
       }
       setUserData(JSON.parse(data));

    },[navigate]);
  return (
    <div>
     
     
      <h2>User Name : {userData.name}</h2>
      <h2>Email : {userData.email}</h2>
      <h2>Password : {userData.password}</h2>
      <h2>Gender : {userData.gender}</h2>
    </div>
  )
}
ProfileShow.prototype = {
    name : PropTypes.string.isRequired,
    email : PropTypes.string.isRequired,
    password : PropTypes.string.isRequired,
    gender : PropTypes.string.isRequired
}

export default ProfileShow
