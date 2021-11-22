import React from 'react';
import {useCounterCtx} from "./store/Context";

function CompB() {
    const { onDecrement } = useCounterCtx()
  return (
    <div>
      <h2>CompB</h2>
        <button onClick={onDecrement}>Minus 10</button>
    </div>
  );
}

export default CompB;
