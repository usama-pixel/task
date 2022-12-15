import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
function CounterComp(){
    const val = localStorage.getItem('val') || 0
    const [count, setCount] = useState(val)

    return(<>
      
        <div className="card">
          <button onClick={() => {
            
            setCount((prevCount) => {
              localStorage.setItem("val",prevCount+1)
              return prevCount + 1
            })
        }}>
            plus (+)
          </button>
          <p>
          count is {count}
          </p>
          <button onClick={() => {
            setCount((prevCount) => {
              localStorage.setItem("val",prevCount - 1)
              return prevCount - 1
            })
        }}>
            Subtract (-)
          </button>
        </div>
    </>)
  }

  export default CounterComp
  