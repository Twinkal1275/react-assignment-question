import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className='app'>
      <h1>React Web</h1>
      <p>{count}</p>
      <button className='btn' onClick={handleDecrement}>Decrement</button>
      <button onClick={handleIncrement}>Increment</button><br></br><br></br>
      <button className='btn1' onClick={handleReset}>Reset</button>
    </div>
  );
}

export default App;