import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// This line finds the 'root' div from your index.html
const root = ReactDOM.createRoot(document.getElementById('root'));

// This line tells React to render your main App component inside that div
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);