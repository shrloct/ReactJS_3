<!-- file: UserContext.jsx -->

import React, { createContext, useState, useContext } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
const [user, setUser] = useState(null);

    const login = (userData) => {
        setUser(userData);
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <UserContext.Provider value={{ user, login, logout }}>
            {children}
        </UserContext.Provider>
    );

};

export const useUser = () => useContext(UserContext);

<!-- file: UserProfile.jsx -->

import React from 'react';
import { useUser } from './UserContext';

const UserProfile = () => {
const { user, logout } = useUser();

    if (!user) {
        return <p>Silakan login untuk melihat informasi pengguna.</p>;
    }

    return (
        <div>
            <h1>Selamat datang, {user.name}!</h1>
            <button onClick={logout}>Logout</button>
        </div>
    );

};

export default UserProfile;

<!-- file: LoginForm.jsx -->

import React, { useState } from 'react';
import { useUser } from './UserContext';

const LoginForm = () => {
const [name, setName] = useState('');
const { login } = useUser();

    const handleSubmit = (e) => {
        e.preventDefault();
        login({ name });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Masukkan nama"
            />
            <button type="submit">Login</button>
        </form>
    );

};

export default LoginForm;

<!-- file: App.jsx -->

import React from 'react';
import { UserProvider } from './UserContext';
import LoginForm from './LoginForm';
import UserProfile from './UserProfile';

const App = () => (
<UserProvider>

<div>
<h1>Aplikasi Pengguna</h1>
<LoginForm />
<UserProfile />
</div>
</UserProvider>
);

export default App;
