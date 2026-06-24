import logo from './logo.svg';
import './App.css';
import { useMemo, useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);
  let num1 = 30;
  let num2 = 2;
  let sum = useMemo(() => {
    console.log("Calculating Sum");
    return num1 + num2;
  }, [num1, num2]);
  let sumnotmemo = (() => {
    console.log("Calculating Sum without memo");
    return num1 + num2;
  })();
  return (
    <div>
      <h1>Counter</h1>
      <button onClick={() => setCounter(counter + 1)}>Counter</button>
      <p>{counter}</p>
      <p>sum : {sum}</p>
      <p>sum without memo : {sumnotmemo}</p>
    </div>
  );
}

export default App;
