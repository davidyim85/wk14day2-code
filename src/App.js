import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Pokemon from './Pokemon'
import Control from './Control'

function App() {
  const [count, setCount] = useState(0);
  const [arrNums, setArrNums] = useState([1, 2, 3, 4])

  function increment() {
    console.log('increment')
    setCount(count + 1);
  }

  function decrement() {
    console.log('decrement')
    setCount(count - 1);
  }

  function handleAddStart(){
    const a = arrNums
    a.unshift(0)
    setArrNums(a)
  }

  function handleAddEnd(){
    const b = arrNums
    b.push(100)
    setArrNums(b)
  }


  return (
    <div className="App">

      <Pokemon title='my list'/>

      <Control 
        increment={increment}
        decrement={decrement}
      />

      Current Count: {count}
      <br />
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>

      <div>
        {arrNums}
        <br />
        <button onClick={() => handleAddStart()}>add 0 to start</button>
        <button onClick={() => handleAddEnd()}>add 100 to end</button>
      </div>
    </div>
  );
}

export default App;
