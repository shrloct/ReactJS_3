import React, { useContext } from "react";
import CounterContext from "./CounterContext";

function CounterComponent() {
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
