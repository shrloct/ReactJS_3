import React, { useState, useEffect } from 'react';

const DataTable = () => {
const [data, setData] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
const fetchData = async () => {
try {
const response = await fetch('https://api.example.com/data');
if (!response.ok) {
throw new Error('Network response was not ok');
}
const result = await response.json();
setData(result);  
 } catch (error) {
setError(error);  
 } finally {
setLoading(false);  
 }
};

    fetchData();

}, []);

if (loading) {
return <p>Loading...</p>;  
 }

if (error) {
return <p>Error: {error.message}</p>;  
 }

return (

<table>
<thead>
<tr>
<th>ID</th>
<th>Name</th>
<th>Value</th>
</tr>
</thead>
<tbody>
{data.map((item) => (
<tr key={item.id}>
<td>{item.id}</td>
<td>{item.name}</td>
<td>{item.value}</td>
</tr>
))}
</tbody>
</table>
);
};

export default DataTable;
