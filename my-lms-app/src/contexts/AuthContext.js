import React, { createContext, useState } from 'react';

// create auth context
export const AuthContext = createContext();

// create auth provider
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [status, setStatus] = useState(null);

  // login function
  const login = (username, password) => {
    setUser({ username, password });
    setStatus({ type: 'success', message: 'Login successful! Redirecting...' });
  };

  // logout function
  const logout = () => {
    setUser(null);
    setStatus(null);
  };

  // set error message
  const setError = (message) => {
    setStatus({ type: 'error', message });
  };

  // context value
  const value = {
    user,
    status,
    login,
    logout,
    setError
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}; 