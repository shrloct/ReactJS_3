<!-- file: Form -->

import React, { useReducer } from 'react';

const initialState = {
name: '',
email: '',
password: '',
};

const formReducer = (state, action) => {
switch (action.type) {
case 'UPDATE_FIELD':
return {
...state,
[action.field]: action.value,
};
case 'RESET_FORM':
return initialState;
default:
return state;
}
};

const Form = () => {
const [state, dispatch] = useReducer(formReducer, initialState);

const handleChange = (e) => {
dispatch({
type: 'UPDATE_FIELD',
field: e.target.name,
value: e.target.value,
});
};

const handleReset = () => {
dispatch({ type: 'RESET_FORM' });
};

const handleSubmit = (e) => {
e.preventDefault();
alert(`Submitted:\nName: ${state.name}\nEmail: ${state.email}`);
handleReset();
};

return (

<form onSubmit={handleSubmit} style={{ maxWidth: '300px', margin: 'auto' }}>
<div style={{ marginBottom: '10px' }}>
<label htmlFor="name">Name:</label>
<input
type="text"
id="name"
name="name"
value={state.name}
onChange={handleChange}
style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
/>
</div>
<div style={{ marginBottom: '10px' }}>
<label htmlFor="email">Email:</label>
<input
type="email"
id="email"
name="email"
value={state.email}
onChange={handleChange}
style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
/>
</div>
<div style={{ marginBottom: '10px' }}>
<label htmlFor="password">Password:</label>
<input
type="password"
id="password"
name="password"
value={state.password}
onChange={handleChange}
style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
/>
</div>
<button type="submit" style={{ padding: '10px 20px', marginRight: '10px' }}>
Submit
</button>
<button type="button" onClick={handleReset} style={{ padding: '10px 20px' }}>
Reset
</button>
</form>
);
};

export default Form;

<!-- file: index -->

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

<!-- file: app -->

import React from 'react';
import Form from './Form';

const App = () => {
return (
<div>
<h1>Form with useReducer</h1>
<Form />
</div>
);
};

export default App;
