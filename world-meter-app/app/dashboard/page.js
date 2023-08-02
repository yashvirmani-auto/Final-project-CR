"use client";

import React, { useState } from 'react'
import {DUMMY_DATA} from "../../dummy-data"
import "./style.css"

const Dashboard = () => {
  const [data,setData] = useState(DUMMY_DATA)
  const [order,setOrder] = useState("ASC")

  const sorting = (column) => {
    if(order == "ASC"){
      const sortedData = [...data].sort((a,b)=> a[column] > b[column] ? 1 : -1 )
      setData(sortedData)
      setOrder("DSC")
    }else{
      const sortedData = [...data].sort((a,b)=> a[column] < b[column] ? 1 : -1 )
      setData(sortedData)
      setOrder("ASC")
    }
  }

  function commafy( num ) {
    var str = num.toString().split('.');
    if (str[0].length >= 5) {
        str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');
    }
    if (str[1] && str[1].length >= 5) {
        str[1] = str[1].replace(/(\d{3})/g, '$1 ');
    }
    return str.join('.');
}

  return (
    <div className=''>
      <h1 className='hero__subtitle heading'>WorldMeter Ranking updated as of 2023</h1>
      <table className='content-table'>
        <thead>
          <th onClick={()=>sorting("name")}>Country</th>
          <th onClick={()=>sorting("gdp")}>GDP</th>
          <th onClick={()=>sorting("population")}>Population</th>
          <th onClick={()=>sorting("area")}>Area</th>
          <th onClick={()=>sorting("incomePerCapita")}>Income Per Capita</th>
          <th onClick={()=>sorting("exports")}>Exports</th>
          <th onClick={()=>sorting("imports")}>Imports</th>
          <th onClick={()=>sorting("populationDensity")}>Population Density</th>
          <th onClick={()=>sorting("crimeRate")}>Crime Rate</th>
        </thead>
        <tbody>
          {data.map((e)=>(
            <tr key={e.id}>
              <td>{e.name}</td>
              <td>{commafy(e.gdp)}</td>
              <td>{commafy(e.population)}</td>
              <td>{commafy(e.area)}</td>
              <td>{commafy(e.incomePerCapita)}</td>
              <td>{commafy(e.exports)}</td>
              <td>{commafy(e.imports)}</td>
              <td>{commafy(e.populationDensity)}</td>
              <td>{commafy(e.crimeRate)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Dashboard