import { useState } from "react"

function Card() {
  const [count, setCount] = useState(0)
//   count = count+1 - > wrong 
//   setCount(count+1) - > this is the right way to update a state variable

  return (
    <div
        style={{
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            justifyContent:'center',
            padding:'12px',
            border:'2px solid black',
            borderRadius:'4px',
            minHeight:'400px',
            minWidth:'350px'

        }}
    >

        <h1
            style={{
                fontSize:'76px'
            }}
        >{count}</h1>
        <div
            style={{
                display:'flex',
                gap:'10px'
            }}
        >
            <button 
                style={{
                    padding:'5px',
                    fontSize:'56px',
                    width:'100px'
                }}
                // onClick={()=>setCount(Math.max(count-1, 0))}
                onClick={()=>setCount(count-1)}
                disabled={count==0}
            >-</button>

            <button 
                style={{
                    padding:'5px',
                    fontSize:'56px',
                    width:'100px'
                }}
                onClick={()=>setCount(count+1)}
            
            >+</button>
        </div>
        
    </div>
  )
}

export default Card