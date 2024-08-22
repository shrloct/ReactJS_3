import React from "react";
import { useCounter } from "./CounterContext";

const Counter = () => {
  const { count, increment, decrement, reset } = useCounter();

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Counter;
