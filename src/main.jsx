import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
// BARIS INI WAJIB ADA UNTUK MENGIMPOR CSS
import './index.css'; 
import Navbar from './components/Navbar.jsx';
import 'remixicon/fonts/remixicon.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="container mx-auto px-4">
      <Navbar/>
    <App />
    </div>
    
  </React.StrictMode>,
);