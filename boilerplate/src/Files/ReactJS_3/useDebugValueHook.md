import React, { useState, useDebugValue } from 'react';

function useCustomHook(value) {
useDebugValue(value > 10 ? 'High' : 'Low');
return value;
}

const DebugComponent = () => {
const value = useCustomHook(15);

return <div>Value is: {value}</div>;
};

export default DebugComponent;
