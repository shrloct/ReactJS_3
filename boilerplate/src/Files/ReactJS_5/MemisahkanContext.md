<!-- file: ThemeContex.jsx -->

import React, { createContext, useState } from 'react';

// Membuat dan mengekspor ThemeContext
const ThemeContext = createContext();

export function ThemeProvider({ children }) {
const [theme, setTheme] = useState('light');

// Fungsi untuk mengganti tema
const toggleTheme = () => {
setTheme(theme === 'light' ? 'dark' : 'light');
};

return (
// Menggunakan ThemeContext.Provider untuk menyediakan nilai context
<ThemeContext.Provider value={{ theme, toggleTheme }}>
{children}
</ThemeContext.Provider>
);
}

export default ThemeContext;

<!-- file: app.jsx -->

import React from 'react';
import { ThemeProvider } from './ThemeContext';
import ThemedComponent from './ThemedComponent';

function App() {
return (
// Menggunakan ThemeProvider untuk menyediakan context
<ThemeProvider>
<ThemedComponent />
</ThemeProvider>
);
}

export default App;
