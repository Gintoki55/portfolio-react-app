import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeManagerProvider } from "./context/thememenager";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeManagerProvider>
      <App />
    </ThemeManagerProvider>
  </React.StrictMode>
);

reportWebVitals();
