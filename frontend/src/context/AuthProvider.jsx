import React, { createContext, useState, useContext } from 'react';

// Create Context
export const AuthContext = createContext();

// AuthProvider Component
export default function AuthProvider({ children }) {
    const initialAuthUser = localStorage.getItem("Users");
    const [authUser, setAuthUser] = useState(
        initialAuthUser ? JSON.parse(initialAuthUser) : undefined
    );

    return (
        <AuthContext.Provider value={[ authUser, setAuthUser ]}>
            {children}
        </AuthContext.Provider>
    );
}

//Custom Hook for Context
export const useAuth = () => useContext(AuthContext);