import React from 'react'

function NewInfo({name,lastName}) {
  return (
    <div style={{borderRadius:"50%", borderBottom:"6px solid green",display:"flex",alignItems:"center",justifyContent:"center"}}>
<h1>{name}</h1> <br/>
<h1>{lastName}</h1>
    </div>
  )
}

export default NewInfo;
  