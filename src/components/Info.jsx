import React from 'react'

 const Info =(props)=>{
  return (
    <>
    <div>
<h1 >My name is {props.name}  <span style ={{color:"red", fontSize:"3rem"}}>{props.lastName}</span>  </h1> 

<p>
  <img style ={{borderRadius:"50%"}}src ={props.img}/>
</p>
<h2>
    I am a  <span style ={{color:"#61DBFB", fontSize:"3rem"}}>{props.jobTitle}.</span>
</h2>
    </div>
    </>
  )
}
export default Info;

