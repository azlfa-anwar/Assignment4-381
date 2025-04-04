//GROUP
   // Azlfa Anwar (30176659)
   // Iraj Akbar  (30146997)
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/*
* ENSF 381 - Assignment 4
* Group members:
* Azlfa Anwar - 30176659
* Iraj Akbar - 30146997
* 
* Date: March 30, 2025
*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
