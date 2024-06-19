import React,{useState} from 'react'

function Switchtheme () {
    const [dark,settheme]=useState("#000");
    const Color=()=>{
        settheme(dark=="#fff"?"#000":"#fff");
        document.body.style.background=dark;
    }
  return (
    <div>
      <h1 style={{color:"red"}}>Theme</h1>
      <button onClick={Color} style={{backgroundColor: "white",fontStyle:"italic", width:"100px", height:"30px",borderRadius:"10px", marginTop:"20px"}}>Switch theme</button>
    </div>
  )
}

export default Switchtheme
