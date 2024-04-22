import { Chart as ChartJs, registerables } from 'chart.js';
import { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import Nav from 'react-bootstrap/Nav';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import '../App.css';


ChartJs.register(...registerables);

function DashBoard() {
  const [year , setYear] = useState(new Date().getFullYear());
  const navigate = useNavigate();
  const data = [{
    "2024" : {
        "jan" : 120 , 
        "feb" : 130 , 
        "mar" : 140 , 
        "apr" : 150
    }
  },{
    "2023" : {
        "jan" : 10 ,
        "feb" : 20 ,
        "mar" : 30 , 
        "apr" : 40 , 
        "may" : 50 , 
        "jun" : 60 , 
        "jul" : 70 ,
        "aug" : 80 , 
        "set" : 90 , 
        "oct" : 100 , 
        "nov" : 110 , 
        "dec" : 120 
    }
  }];
 

  let CollectionOfYears = ()=>{
    let years = data.map((year)=>{
        return Object.keys(year)
    });
    return years;
}
let checkGivenYearIsPresnet = (year)=>{
  let years = CollectionOfYears();
  let pos = -1;
  for(let i = 0 ; i < years.length ; i++){
      if(years[i][0] === year+""){
          pos = i ;
          break
      }
  }
  if(pos !== -1){
      // console.log("Year fnd "+pos);
      return pos ;
  }

}
const getMonthsForYear = (d)=>{
  let y = checkGivenYearIsPresnet(d);
  return data[y][d+""];
}

const onlyMonthsName = (d)=>{
  let z = getMonthsForYear(d);
  return Object.keys(z);
}
const valueForMonths = (d)=>{
  let z = getMonthsForYear(d);
  return Object.values(z);
}
  const val = {
    labels: onlyMonthsName(year+""),
    datasets: [
      {
        label: 'User Count',
        data: valueForMonths(year+""),
        backgroundColor: 'aqua',
        borderColor: 'black',
        borderWidth: 1,
      }
    ]
  };

  const options = {};

  return (
    <div className="App">
      <nav>
            <Nav fill variant="tabs" defaultActiveKey="/home">
            <Nav.Item>
                    <Nav.Link  onClick={()=>{navigate('/alluser')}} >All users</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                    <Nav.Link onClick={()=>{navigate('/dashboard')}} >Dash Board</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                    <Nav.Link onClick={()=>{localStorage.removeItem("userData"); navigate("/")}}  >Log out</Nav.Link>
                </Nav.Item>
            </Nav>
        </nav>
      <h1>User Dashboard</h1>
      <Form.Select size="lg" onChange={(e)=>{setYear(e.target.value)}} className='bargraph' >
  {
    CollectionOfYears().map((item) => {
      return item.map((y) => {
        return (<option key={y} value={y} >{y}</option>);
      });
    })
  }
</Form.Select>
      <Bar 
        data={val} 
        options={options}
      />
      <br/>
     

    
    </div>
  );
}

export default DashBoard;



