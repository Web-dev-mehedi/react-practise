import { useState } from "react"

export default function Counter1(){
      const [player, setCount] = useState(11)
        const handleClick1 = ()=>{
            const newCount = player + 1 ;
            (newCount >= 41)? "" : setCount(newCount)

        }
        const handleClick2 = ()=>{
            const newCount = player - 1 ;
            (newCount <= 10)? '' : setCount(newCount)
        }
     
    return(
        <div style={{background:'blue',color:'white', borderRadius:'12px', marginBottom:'10px', padding:'10px' }}>
            <h3 style={{color:'yellow'}} >Players :<span style={{color:'red'}}>{player}</span></h3>
            <button onClick={handleClick1}>Increase</button>
            <button onClick={handleClick2}>decrease</button>

        </div>
    )
}