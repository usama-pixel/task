import { useState } from 'react'
import './App.css'
import CounterComp from './counterComp'
import DividerComp from './dividerComp'
import MultiplierComp from './multiplierComp'
import SubComp from './subtractComp'

function App() {
  return (
    <div className="App">
      <h1>React Test Task</h1>
    <CounterComp/>
    <SubComp/>
    <MultiplierComp/>
    <DividerComp/>
    </div>
  )
}


export default App
