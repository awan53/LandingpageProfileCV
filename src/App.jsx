// App.jsx (BARU)
import React from 'react';
// Import komponen Router, Routes, dan Route
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProjectList from './ProjectList'; // Komponen list/homepage yang baru dibuat
import ProjectDetail from './ProjectDetail'; // Komponen detail yang baru dibuat
import Navbar from "./components/Navbar";

// Komponen App ini HANYA akan mengatur rute
function App() {
  return (

    // <Router> membungkus seluruh aplikasi Anda
    
        
      <Routes>
        
        {/* Rute 1: Homepage / Daftar Proyek */}
        <Route path="/" element={<ProjectList />} />
        
        {/* Rute 2: Halaman Detail. :projectId adalah parameter dinamis. */}
        <Route path="/project/:id" element={<ProjectDetail />} />

        {/* Opsional: Rute 404 */}
        <Route path="*" element={<div className="min-h-screen bg-gray-900 text-white p-10">404 - Halaman Tidak Ditemukan</div>} />
      </Routes>
    
  );
}

export default App;