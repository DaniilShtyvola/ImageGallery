import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Gallery from './components/Gallery/Gallery'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Gallery/>
  </React.StrictMode>
);

reportWebVitals();
