import React from 'react'
import { data } from '../components/data'

import carnival from "../assets/carnival.jpg"

const Ticket = () => {
  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
        {
            data.map((data, index)=>{
                return (

                   <div key={index} style={{
                    // border:"1px solid grey",
                    height:"250px",
                    width:"80%",
                    maxWidth:"1000px",
                    marginTop:"20px",
                    borderRadius: "15px",
                    display:"flex",
                    overflow:"hidden",
                    boxShadow:"rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px"

                   }}>
                  <div style={
                    {flex:"1",
                    backgroundImage: `url(${data.images})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }
                  }>

                  </div>
                  <div style={
                    {flex:"2",
                    borderLeft:"3px dashed gray",
                    paddingLeft:"20px",
                    marginLeft:"5px",
                    position:"relative"
                }
                  }>
                    <h2 style={{fontSize:"30px",marginBottom:"20px"}} >{data.title}</h2>
                    <div style={{fontSize:"20px",marginBottom:"20px"}}>{data.description}</div>
                 
                        <div style={{fontSize:"20px",marginBottom:"20px"}}>{data.date} | {data.time}</div>
                    <div style={{fontSize:"20px",marginBottom:"20px"}}>{data.description}</div>

                    <button  style={{fontSize:"20px",padding:" 5px 10px",position:"absolute",right:"20px",bottom:"20px",borderRadius:"6px"}}>
                        Buy Now
                    </button>
                  </div>
                   </div>
                )
            })
        }
    </div>
  )
}

export default Ticket