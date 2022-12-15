import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
function MultiplierComp(){
    const val = -5
    const [MultiplierVal, setMultiplierVal] = useState(1)
    
    return(<>
        <div className="card">
        <p>Multiplier</p>
          <button onClick={() =>{
            console.log(localStorage.getItem("val"))
            setMultiplierVal(localStorage.getItem("val")*val)
            }}>
            {val}
          </button>
          <p>{MultiplierVal}</p>
        </div>
    </>)
  }

  export default MultiplierComp
  