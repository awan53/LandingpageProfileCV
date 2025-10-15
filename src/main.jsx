import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
// BARIS INI WAJIB ADA UNTUK MENGIMPOR CSS
import './index.css'; 
// PENTING: Gunakan BrowserRouter untuk Development Lokal
import { BrowserRouter} from 'react-router-dom'; 
import 'remixicon/fonts/remixicon.css';
import "./i18next.js";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* HANYA ADA SATU ROUTER: BrowserRouter */}
      <BrowserRouter basename="/LandingpageProfileCV">
        <App/>
      </BrowserRouter>
      
    
  </React.StrictMode>,
);
