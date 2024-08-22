<!-- file: ThemeContext.jsx -->

import React, { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(prevMode => !prevMode);
    };

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );

};

export const useTheme = () => useContext(ThemeContext);

<!-- file: App.jsx -->

import React from 'react';
import { ThemeProvider, useTheme } from './ThemeContext';
import './App.css'; // Pastikan Anda membuat CSS untuk tema terang dan gelap

const ThemedComponent = () => {
const { isDarkMode, toggleTheme } = useTheme();
return (

<div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
<button onClick={toggleTheme}>
{isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
</button>
<p>{isDarkMode ? 'Dark Mode is On' : 'Light Mode is On'}</p>
</div>
);
};

const App = () => (
<ThemeProvider>
<ThemedComponent />
</ThemeProvider>
);

export default App;

<!-- file: app.css -->

body {
margin: 0;
font-family: Arial, sans-serif;
}

.light-mode {
background-color: #ffffff;
color: #000000;
}

.dark-mode {
background-color: #000000;
color: #ffffff;
}
