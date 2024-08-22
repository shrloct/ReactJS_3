<!-- file: CounterContext.js -->

import React, { createContext, useReducer } from 'react';

// Membuat context untuk counter
const CounterContext = createContext();

// Fungsi reducer untuk mengelola state counter
function counterReducer(state, action) {
switch (action.type) {
case 'increment':
return { count: state.count + 1 };
case 'decrement':
return { count: state.count - 1 };
default:
throw new Error(`Unhandled action type: ${action.type}`);
}
}

// Provider untuk menyediakan state dan dispatch kepada komponen anak
export function CounterProvider({ children }) {
const [state, dispatch] = useReducer(counterReducer, { count: 0 });

return (
<CounterContext.Provider value={{ state, dispatch }}>
{children}
</CounterContext.Provider>
);
}

export default CounterContext;

<!-- CounterComponent.js -->

import React, { useContext } from 'react';
import CounterContext from './CounterContext';

function CounterComponent() {
// Menggunakan useContext untuk mengakses state dan dispatch dari context
const { state, dispatch } = useContext(CounterContext);

return (
<div>
<h1>Counter: {state.count}</h1>
<button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
<button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
</div>
);
}

export default CounterComponent;
