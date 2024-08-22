<!-- file: CounterContext.jsx -->

import React, { createContext, useReducer, useContext } from 'react';

// Action Types
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';

// Initial State
const initialState = { count: 0 };

// Reducer Function
const counterReducer = (state, action) => {
switch (action.type) {
case INCREMENT:
return { count: state.count + 1 };
case DECREMENT:
return { count: state.count - 1 };
case RESET:
return { count: 0 };
default:
return state;
}
};

const CounterContext = createContext();

export const CounterProvider = ({ children }) => {
const [state, dispatch] = useReducer(counterReducer, initialState);

    const increment = () => dispatch({ type: INCREMENT });
    const decrement = () => dispatch({ type: DECREMENT });
    const reset = () => dispatch({ type: RESET });

    return (
        <CounterContext.Provider value={{ count: state.count, increment, decrement, reset }}>
            {children}
        </CounterContext.Provider>
    );

};

export const useCounter = () => useContext(CounterContext);

<!-- file: Counter.jsx -->

import React from 'react';
import { useCounter } from './CounterContext';

const Counter = () => {
const { count, increment, decrement, reset } = useCounter();

    return (
        <div>
            <h2>Counter: {count}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    );

};

export default Counter;

<!-- file: App.jsx -->

import React from 'react';
import { UserProvider } from './UserContext';
import { CounterProvider } from './CounterContext';
import LoginForm from './LoginForm';
import UserProfile from './UserProfile';
import Counter from './Counter';

const App = () => (
<UserProvider>
<CounterProvider>

<div>
<h1>Aplikasi Pengguna dan Counter</h1>
<LoginForm />
<UserProfile />
<Counter />
</div>
</CounterProvider>
</UserProvider>
);

export default App;
