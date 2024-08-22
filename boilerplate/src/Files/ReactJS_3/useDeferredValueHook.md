import React, { useState, useDeferredValue } from 'react';

const itemList = Array.from({ length: 10000 }, (\_, i) => `Item ${i + 1}`);

function SearchComponent() {
const [input, setInput] = useState('');
const deferredInput = useDeferredValue(input);

const filteredItems = itemList.filter(item =>
item.toLowerCase().includes(deferredInput.toLowerCase())
);

return (
<div>
<input
type="text"
value={input}
onChange={e => setInput(e.target.value)}
placeholder="Search..."
/>
<ul>
{filteredItems.map(item => (
<li key={item}>{item}</li>
))}
</ul>
</div>
);
}

export default SearchComponent;
