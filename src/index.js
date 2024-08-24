import React from 'react';
import ReactDOM from 'react-dom/client'; // Import createRoot from 'react-dom/client'
import { HashRouter } from 'react-router-dom';
import App from './App';

// Create a root and render the app
const root = ReactDOM.createRoot(document.getElementById('root')); // Use createRoot instead of render
root.render(
  <HashRouter>
    <App />
  </HashRouter>
);
