import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
const Dashboard = () => {
const [clinic,setClinic] = useState([])
const navigate = useNavigate()

useEffect(()=>{
    fetch("https://json-pract.herokuapp.com/clinic")
    .then((r)=>r.json())
    .then((r)=>setClinic(r))
},[])

const handleNav = (id)=>{
    navigate(`/${id}`)
}
  return (
    <div>
        {
            clinic?.map((data)=>{
                return(
                    <div key={data.id} >
                        <button onClick={()=>handleNav(data.id)} >{data.cname}</button>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Dashboard