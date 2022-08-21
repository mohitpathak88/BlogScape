import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>      
    <App />
  </React.StrictMode>
);

// strictMode helps react in doing additional checks and gives warnings accordingly
//Here it is taking App component rendering it to the DOM at 'root' position
