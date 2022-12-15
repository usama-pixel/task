import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
function SubComp(){
    const val = 4
    const [subVal, setsubVal] = useState(0)
    
    return(<>
        <div className="card">
        <p>Subtract</p>
          <button onClick={() =>{
            setsubVal(val - localStorage.getItem("val"))
          }}>
            {val}
          </button>
        <p>{subVal}</p>
        </div>
    </>)
  }

  export default SubComp
  