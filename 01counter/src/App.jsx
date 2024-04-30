import { useState } from 'react';
import './App.css'

function App() {

  let [counter, setCounter] = useState(15);
  
  const addValue = ()=>{
    ++counter;
    if(counter>20){
      alert("can not go beyound 20");
      return
    }
    setCounter(counter);
  }
  const decrementValue = ()=>{
    --counter;
    if(counter<0){
      alert("can not beyound 0");
      return;
    }
    setCounter(counter);
  }
  return (
    <>
    <h1>Chai aur react</h1>
    <h3>Counter : {counter}</h3>
    <button onClick={addValue}>Add Value</button>
    <button onClick={decrementValue}>Substract Value</button>
    </>
  )
}

export default App
