import React,{useState} from 'react'

function Switchtheme () {
    const [dark,settheme]=useState("#23272F");
    const Color=()=>{
        settheme(dark=="#f0f8ff"?"#23272F":"#f0f8ff");
        document.body.style.background=dark;
    }
  return (
    <div className='themediv'>
      <h1>Theme</h1>
      <p>Pls tap the button to change the theme</p>
      <button onClick={Color}>Switch theme</button>
    </div>
  )
}

export default Switchtheme
