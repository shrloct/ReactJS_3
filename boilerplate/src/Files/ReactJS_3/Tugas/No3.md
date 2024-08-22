<!-- file: ThemeContex -->

import React, { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
const [theme, setTheme] = useState('light');

const toggleTheme = () => {
setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
};

return (
<ThemeContext.Provider value={{ theme, toggleTheme }}>
{children}
</ThemeContext.Provider>
);
};

export const useTheme = () => {
return useContext(ThemeContext);
};

<!-- file: Header -->

import React from 'react';
import { useTheme } from './ThemeContext';

const Header = () => {
const { theme, toggleTheme } = useTheme();

return (

<header
style={{
        padding: '10px',
        textAlign: 'center',
        backgroundColor: theme === 'light' ? '#f0f0f0' : '#333',
        color: theme === 'light' ? '#000' : '#fff',
      }} >
<h1>{theme === 'light' ? 'Light Theme' : 'Dark Theme'}</h1>
<button onClick={toggleTheme}>Toggle Theme</button>
</header>
);
};

export default Header;

<!-- file: Content -->

import React from 'react';
import { useTheme } from './ThemeContext';

const Content = () => {
const { theme } = useTheme();

return (

<main
style={{
        padding: '20px',
        backgroundColor: theme === 'light' ? '#fff' : '#555',
        color: theme === 'light' ? '#000' : '#fff',
      }} >
<p>
This is a {theme === 'light' ? 'light' : 'dark'} 
</p>
</main>
);
};

export default Content;

<!-- file: app -->

import React from 'react';
import { ThemeProvider } from './ThemeContext';
import Header from './Header';
import Content from './Content';

const App = () => {
return (
<ThemeProvider>
<Header />
<Content />
</ThemeProvider>
);
};

export default App;
