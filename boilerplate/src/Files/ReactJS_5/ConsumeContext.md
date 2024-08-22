<!-- file: ThemedComponent -->

import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

function ThemedComponent() {
// Menggunakan useContext untuk mengakses nilai context
const { theme, toggleTheme } = useContext(ThemeContext);

// Menentukan gaya berdasarkan nilai context
const style = {
backgroundColor: theme === 'light' ? '#fff' : '#333',
color: theme === 'light' ? '#000' : '#fff',
padding: '10px',
textAlign: 'center'
};

return (

<div style={style}>
Tema saat ini: {theme}
{/_ Tombol untuk mengganti tema _/}
<button onClick={toggleTheme}>Ganti Tema</button>
</div>
);
}

export default ThemedComponent;
