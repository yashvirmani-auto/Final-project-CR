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
              <td>{e.gdp}</td>
              <td>{e.population}</td>
              <td>{e.area}</td>
              <td>{e.incomePerCapita}</td>
              <td>{e.exports}</td>
              <td>{e.imports}</td>
              <td>{e.populationDensity}</td>
              <td>{e.crimeRate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Dashboard