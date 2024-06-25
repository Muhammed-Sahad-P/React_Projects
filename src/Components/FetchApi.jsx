import React,{useState,useEffect,useContext, createContext} from 'react'

const FetchApi = () => {
    const [count,setCount] = useState(0)

const inc=()=>{
    setCount(prevCount=>prevCount+1)
}
const dec=()=>{
    setCount(prevCount=>prevCount-1)
}

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={inc}>+</button>
      <button>-</button>
    </div>
  )
}

export default FetchApi
