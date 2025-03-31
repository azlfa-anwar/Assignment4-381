import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AuthMessage from './components/AuthMessage';
import { AuthProvider, AuthContext } from './contexts/AuthContext';
import './App.css';

function LoginFormContent() {
  const navigate = useNavigate();
  const { login, setError } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // fetch users from api
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
        setError('Unable to fetch user data. Please try again later.');
      }
    };

    fetchUsers();
  }, [setError]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    if (!formData.username.trim()) {
      setError('Username is required');
      return false;
    }

    if (!formData.password.trim()) {
      setError('Password is required');
      return false;
    }

    if (formData.password.length < 8) {
      setError('Password must be at least 8 characters');
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    // check if user exists
    const user = users.find(
      u => u.username === formData.username || u.email === formData.username
    );

    if (user) {
      // simulate login success
      login(formData.username, formData.password);
      
      // redirect after 2 seconds
      setTimeout(() => {
        navigate('/courses');
      }, 2000);
    } else {
      setError('Invalid username or password');
    }

    setIsLoading(false);
  };

  return (
    <main className="login-container">
      <h1>Login to Your Account</h1>
      
      <AuthMessage />
      
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username or Email</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        
        <button 
          type="submit" 
          className="login-button"
          disabled={isLoading}
        >
          {isLoading ? 'Logging in...' : 'Login'}
        </button>
      </form>
      
      <div className="additional-options">
        <a href="#" className="forgot-password">Forgot Password?</a>
      </div>
    </main>
  );
}

function LoginForm() {
  return (
    <div>
      <Header />
      <AuthProvider>
        <LoginFormContent />
      </AuthProvider>
      <Footer />
    </div>
  );
}

export default LoginForm;
