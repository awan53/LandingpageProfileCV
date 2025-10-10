import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
// BARIS INI WAJIB ADA UNTUK MENGIMPOR CSS
import './index.css'; 
import { BrowserRouter as Router } from 'react-router-dom'; 
import Navbar from './components/Navbar.jsx';
import 'remixicon/fonts/remixicon.css';
import "./i18next.js";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <div className="coutainer mx-auto px-04 ">
          <Navbar/>
          <App/>
      </div>
    </Router>
    
  </React.StrictMode>,
);