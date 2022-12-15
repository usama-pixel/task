import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
function DividerComp() {
    const val = 21
    const [dividerVal, setDividerVal] = useState(1)
    
    return(<>
        <div className="card">
        <p>Divider</p>
          <button onClick={() =>{
            setDividerVal(val / localStorage.getItem("val"))
            }}>
            {val}
          </button>
        <p>{dividerVal}</p>
        </div>
    </>)
  }

  export default DividerComp
  