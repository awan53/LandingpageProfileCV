import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
// BARIS INI WAJIB ADA UNTUK MENGIMPOR CSS
import './index.css'; 
// PENTING: Gunakan BrowserRouter untuk Development Lokal
import { BrowserRouter as Router } from 'react-router-dom'; 
import 'remixicon/fonts/remixicon.css';
import "./i18next.js";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* HANYA ADA SATU ROUTER: BrowserRouter */}
    <Router>
      <div className="container mx-auto px-04 ">
        {/* App akan mengatur Navbar dan Routes di dalamnya */}
        <App/>
      </div>
    </Router>
  </React.StrictMode>,
);
