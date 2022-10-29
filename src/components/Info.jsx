import React from 'react'
import NewInfo from "./NewInfo";

 const Info =({name,lastName,img,jobTitle})=>{
  return (
    <>
    <div>
<h1 >My name is {name}  <span style ={{color:"red", fontSize:"3rem"}}>{lastName}</span>  </h1> 

<p>
  <img style={{borderRadius:"50%"}}  src={img}/>
</p>
<h2>
    I am a  <span style ={{color:"#61DBFB", fontSize:"3rem"}}>{jobTitle}.</span>
</h2>
    </div>
    <NewInfo name ={name} lastName={lastName}/>
    </>
  )
}
export default Info;

