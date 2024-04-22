import { Chart as ChartJs, registerables } from 'chart.js';
import { useState } from 'react';
import { Bar } from 'react-chartjs-2';
ChartJs.register(...registerables);

function Chart() {
  const [year , setYear] = useState(new Date().getFullYear());
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
      <h1>Hello</h1>
      <Bar 
        data={val} 
        options={options}
      />
      <br/>
      <select onChange={(e)=>{setYear(e.target.value)}} >
  {
    CollectionOfYears().map((item) => {
      return item.map((y) => {
        return (<option key={y} value={y} >{y}</option>);
      });
    })
  }
</select>

    
    </div>
  );
}

export default Chart;
