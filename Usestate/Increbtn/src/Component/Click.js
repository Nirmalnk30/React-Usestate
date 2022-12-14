import React, { useState } from 'react';
import './Click.css';
function Click() {
  let [count, setCount] = useState(0);

  let HandleIncrement = () => {
    setCount(count + 1);
  };

  let ResetHandler = () => {
    setCount(0);
  };

  return (
    <div>
      <button onClick={HandleIncrement}>Click me</button>
      <p> Button was Clicked {count} Times</p>

      <button className="a1" onClick={ResetHandler}>Reset</button>
       
  
    </div>
  );
}
export default Click;
