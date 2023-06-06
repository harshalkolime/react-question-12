import './App.css';
import { useState } from 'react';

function App() {
  let [count, setCount] = useState(0)

  return (
    <>
      <button onClick={() => setCount(count = count + 1)}>+</button>
      <h1>Counter : {count}</h1>

      <button onClick={() => setCount(count = count - 1)}>-</button>
      <button onClick={() => setCount(0)}>Reset</button>

    </>
  );
}

export default App;
