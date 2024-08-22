import React, { useContext } from "react";
import CounterContext from "./CounterContext";

function CounterComponent() {
  // Menggunakan useContext untuk mengakses state dan dispatch dari context
  const { state, dispatch } = useContext(CounterContext);

  return (
    <div>
      <h1>Counter: {state.count}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
    </div>
  );
}

export default CounterComponent;
