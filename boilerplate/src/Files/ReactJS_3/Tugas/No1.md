import React, { useState } from 'react';

const Counter = () => {
const [count, setCount] = useState(0);

const handleIncrement = () => {
setCount(count + 1);
};

const handleReset = () => {
setCount(0);
};

return (
<div style={{ textAlign: 'center', marginTop: '50px' }}>
<h1>Counter: {count}</h1>
<button onClick={handleIncrement} style={{ marginRight: '10px', padding: '10px 20px' }}>
Increment
</button>
<button onClick={handleReset} style={{ padding: '10px 20px' }}>
Reset
</button>
</div>
);
};

export default Counter;
