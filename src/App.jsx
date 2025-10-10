// App.jsx (BARU YANG SUDAH DIPERBAIKI)
import React from 'react';
// PENTING: Ganti BrowserRouter menjadi HashRouter untuk GitHub Pages
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import ProjectList from './ProjectList'; 
import ProjectDetail from './ProjectDetail'; 
import Navbar from "./components/Navbar";

// Komponen App ini HANYA akan mengatur rute
function App() {
  return (
    // Kita harus memiliki elemen Router yang membungkus Routes
    <Router> 
      {/* Navbar di luar Routes agar selalu terlihat */}
      <Navbar /> 
      
      <Routes>
        
        {/* Rute 1: Homepage / Daftar Proyek */}
        <Route path="/" element={<ProjectList />} />
        
        {/* Rute 2: Halaman Detail. :projectId adalah parameter dinamis. */}
        <Route path="/project/:id" element={<ProjectDetail />} />

        {/* Opsional: Rute 404 */}
        <Route path="*" element={<div className="min-h-screen bg-gray-900 text-white p-10">404 - Halaman Tidak Ditemukan</div>} />
      </Routes>
    </Router>
  );
}

export default App;
