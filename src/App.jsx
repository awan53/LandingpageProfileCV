// App.jsx - Menggunakan BrowserRouter dari main.jsx
import React from 'react';
// HAPUS IMPORT ROUTER DI SINI! Kita hanya butuh Routes dan Route.
import { Routes, Route } from 'react-router-dom'; 
import ProjectList from './ProjectList'; // Komponen list/homepage
import ProjectDetail from './ProjectDetail'; // Komponen detail
import Navbar from "./components/Navbar";

// Komponen App ini bertindak sebagai Layout utama
function App() {
  return (
    <>
      {/* 1. NAVBAR DITEMPATKAN DI LUAR <Routes> agar muncul di semua halaman */}
      <Navbar /> 
      
      <div className="container mx-auto px-4">
        <Routes>
          {/* 2. HANYA <Route> di dalam <Routes> */}
          
          {/* Rute 1: Homepage / Daftar Proyek */}
          <Route path="/" element={<ProjectList />} />
          
          {/* Rute 2: Halaman Detail Proyek */}
          <Route path="/project/:id" element={<ProjectDetail />} />

          {/* Rute 3: 404 Not Found */}
          <Route path="*" element={<div className="min-h-screen bg-gray-900 text-white p-10">404 - Halaman Tidak Ditemukan</div>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
