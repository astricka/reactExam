import React from 'react';
import {useCounterCtx} from "./store/Context";

function CompA1() {
    const { onIncrement, counter } = useCounterCtx()
  return (
    <div>
      <h3>CompA1</h3>
        {counter === 100 && (
            <h1>Didinti nebegalima</h1>
        )}
        {counter !== 100 && (
            <button onClick={onIncrement}>Add 10</button>
        )}

    </div>
  );
}

export default CompA1;
