import React, { useEffect, useState } from 'react'
import axios from "axios"
const Dashboard = () => {
const [clinic,setClinic] = useState([])

useEffect(()=>{
    fetch("https://json-pract.herokuapp.com/clinic")
    .then((r)=>r.json())
    .then((r)=>setClinic(r))
},[])

  return (
    <div>
        {
            clinic?.map((data)=>{
                return(
                    <div key={data.id} >
                        <h1>{data.cname}</h1>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Dashboard