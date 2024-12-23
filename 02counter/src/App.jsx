import { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(18);
  const addValue = () => {
    setCounter(prevCounter => prevCounter + 1);
    setCounter(prevCounter => prevCounter + 1);
    setCounter(prevCounter => prevCounter + 1);
    setCounter(prevCounter => prevCounter + 1);
  };
  return (
    <>
      <h1>React course {counter}</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={addValue}>add value</button>
      <button>remove value</button>
      <p>footer: {counter}</p>
    </>
  );
}

export default App;

