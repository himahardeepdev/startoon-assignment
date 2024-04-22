import axios from 'axios';
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Nav from 'react-bootstrap/Nav';
import { useNavigate } from 'react-router-dom';
function AdminHome() {
  const [data ,setData] = useState([]);
  const navigate = useNavigate();
  useEffect(()=>{
    
      const data = JSON.parse(localStorage.getItem("userData"));
      
      if(!data){
        console.log("Data is present ");
        navigate('/');
      }
   
      const fethData = async()=>{
        try {
          const data = await axios.get('http://localhost:5000');
          
          if(data.data){
            setData(data.data);
          }
          
        } catch (error) {
          console.log(error);
        }
      }
      fethData();
  },[navigate]);
  return (<div>
     <nav>
            <Nav fill variant="tabs" defaultActiveKey="/home">
            <Nav.Item>
                    <Nav.Link onClick={()=>{navigate('/alluser')}} >All users</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                    <Nav.Link onClick={()=>{navigate('/dashboard')}} >Dash Board</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                    <Nav.Link onClick={()=>{localStorage.removeItem("userData"); navigate("/")}}  >Log out</Nav.Link>
                </Nav.Item>
            </Nav>
        </nav>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>Slo</th>
          <th>Name</th>
          <th>Email</th>
          <th>Count</th>
          <th>Last Login</th>
        </tr>
      </thead>
      <tbody>
      
       {
        data.map((item , index)=>{
          return(
            <tr key={item.email}>
            <td>{index+1}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.count}</td>
            <td>{item.lastLoginDate}</td>
          </tr>
          )
        })
      }
      </tbody>
    </Table>
  </div>
   
  );
}

export default AdminHome;